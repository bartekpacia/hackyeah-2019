// Initializes the `journey` service on path `/journey`
import uuid from "uuid";
import { Request, Response, NextFunction } from "express";
import { Application } from '../../declarations';
import firebase from "../../configuration/firebase/"

import Hooks from "./game.hooks"

const handler = async (req: Request, res: Response, next: NextFunction) => {
  const questionRef = firebase.DB.collection('QUESTIONS').doc(req.body.questionId)
  await questionRef.get().then(async doc => {
    const question = doc.data()
    if (!question) {
      res.locals.err = "QUESTION NOT FOUND"
      return next()
    }
    const { acceptedAnswerId, incorrectAnswerSum = 0, correctAnswerSum = 0 } = question;
    if (acceptedAnswerId !== req.body.answerId) {
      await questionRef.set({
        incorrectAnswerSum: incorrectAnswerSum + 1,
        succesRate: correctAnswerSum / (correctAnswerSum + incorrectAnswerSum)
      }, { merge: true })
      res.locals.result = { status: "INCORRECT ANSWER" }
      return next();
    }
    await questionRef.set({
      correctAnswerSum: correctAnswerSum + 1,
      succesRate: correctAnswerSum / (correctAnswerSum + incorrectAnswerSum)
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

  app.post('/login', (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.email || !req.body.password) {
      return res.status(403).send({ status: "NOT_ALLOWED" })
    }
    return res.status(200).send({ status: "OK", userId: uuid.v1() })
  })
}
