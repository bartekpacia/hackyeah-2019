import { Request, Response, NextFunction } from "express";

const sender = (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.err) {
      return res.status(500).send("Something went wrong")
    }
    return res.status(200).send(res.locals.result)
  }

export default {
before: [],
after: [sender]
};
