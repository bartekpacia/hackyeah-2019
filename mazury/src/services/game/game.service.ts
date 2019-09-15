// Initializes the `journey` service on path `/journey`
import uuid from "uuid";
import { Request, Response, NextFunction } from "express";
import { Application } from '../../declarations';
import firebase from "../../configuration/firebase/"

import Hooks from "./game.hooks"

const userLevelMapper = (points: number) => {
  switch (true) {
    case (points < 20):
        return 1;
    case (points < 50):
        return 2;
    case (points < 100):
        return 3;
    case (points < 120):
        return 4;  
    case (points < 200):
        return 5;  
    case (points < 500):
        return 6;  
    case (points < 1000):
        return 7;
      }
}

const handler = async (req: Request, res: Response, next: NextFunction) => {
  let user;
  const questionRef = firebase.DB.collection('QUESTIONS').doc(req.body.questionId)
  const userRef = firebase.DB.collection('USERS').doc(req.body.userId)
  await userRef.get().then(usr => {
    const userObj = usr.data()
    if (!userObj) {
      res.locals.err = "INVALID USERID"
      return next()
    }
    user = userObj;
    return;
  })
  await questionRef.get().then(async doc => {
    const questionObj = doc.data()
    if (!questionObj) {
      res.locals.err = "QUESTION NOT FOUND"
      return next()
    }
    const { acceptedAnswerId, incorrectAnswerSum = 0, correctAnswerSum = 0 } = questionObj;
    const { streak = 0, correctQuestionSum = 0, inCorrectQuestionSum = 0, pkpPoints = 0 } = user;
    if (acceptedAnswerId !== req.body.answerId) {
      await questionRef.set({
        incorrectAnswerSum: incorrectAnswerSum + 1,
        succesRate: correctAnswerSum / (correctAnswerSum + incorrectAnswerSum)
      }, { merge: true })
      await userRef.set({
        inCorrectQuestionSum: inCorrectQuestionSum + 1,
        streak: 0
      }, { merge: true })
      res.locals.result = { status: "INCORRECT ANSWER" }
      return next();
    }
    await questionRef.set({
      correctAnswerSum: correctAnswerSum + 1,
      succesRate: correctAnswerSum / (correctAnswerSum + incorrectAnswerSum)
    }, { merge: true })
    await userRef.set({
      correctQuestionSum: correctQuestionSum + 1,
      streak: streak + 1,
      level: userLevelMapper(correctQuestionSum + 1),
      pkpPoints: pkpPoints + 1 + streak * 0.5 + Math.floor(Math.random() * 5)
    }, { merge: true })
    res.locals.result = { status: "CORRECT ANSWER" }
    return next();
  })
}



export default function (app: Application) {

  app.route('/game')
  .post([
    ...Hooks.before,
    handler,
    ...Hooks.after
  ])

  app.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.email || !req.body.password) {
      return res.status(403).send({ status: "NOT_ALLOWED" })
    }
    let currentUser = {}
    const userRef = firebase.DB.collection('USERS')
    await userRef.get().then(allUsers => {
      allUsers.forEach(user => {
        const userData = user.data()
        if (userData.email === req.body.email) {
          currentUser = {
            ...userData,
            id: user.id
          };
        }
      })
    })
    if (!Object.keys(currentUser).length) {
      return res.status(404).send({ status: "USER_NOT_FOUND" })
    }
    return res.status(200).send({ status: "OK", currentUser })
  })
}
