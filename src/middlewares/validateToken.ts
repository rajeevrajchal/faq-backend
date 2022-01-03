import jwt from "jsonwebtoken";

import { Response, Request, NextFunction } from "express";

const secretKey: string = "2740746318";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("the token is: ", req.headers.authorization);
    if (!req.headers["authorization"]) {
      return res.status(401).json({ message: "You are not Authorized" });
    }
    let authorization = req.headers["authorization"].split(" ");
    console.log("the authorization is: ", authorization);
    if (authorization[0] !== "Bearer") {
      return res.status(401).json({ message: "You are not Authorized" });
    }
    try {
      const jwtVerified = jwt.verify(authorization[1], secretKey);
      if (jwtVerified) {
        next();
      }
    } catch (e) {
      console.log("the e", e);
      return res.status(422).json({ message: "Invalid Token" });
    }
  } catch (e) {
    console.log("the e", e);
    next(e);
  }
};

export default validateToken;
