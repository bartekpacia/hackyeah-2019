import { Request, Response, NextFunction } from "express";
import { body, validationResult } from 'express-validator/check';

const sender = (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.err) {
      return res.status(500).send({ status: res.locals.err})
    }
    return res.status(200).send(res.locals.result)
  }

const validation = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return res.status(403).send(err.array())
  }
}

export default {
before: [
  body('userId','userId is missing').exists().isString(),
  body('questionId', 'questionId is missing').exists().isString(),
  body('answerId', 'answerId is missing').exists().isNumeric(),
  validation
],
after: [sender]
};
