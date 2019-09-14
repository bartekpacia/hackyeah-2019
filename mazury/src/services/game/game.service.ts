// Initializes the `journey` service on path `/journey`
import { Request, Response, NextFunction } from "express";
import { Application } from '../../declarations';

import Hooks from "./game.hooks"

const handler = (req: Request, res: Response, next: NextFunction) => {
  console.log('request hit the server')
  res.locals.result = "OKIDOKI";
  next();
}


export default function (app: Application) {


  app.route('/game')
  .post([
    ...Hooks.before,
    handler,
    ...Hooks.after
  ])
}
