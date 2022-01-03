import { NextFunction, Request, Response } from "express";
import { comparePassword, encryptPassword, generateToken } from "./auth.helper";
import User from "./user.schema";


export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({
        success: "false",
        message: "user not found",
      });
    }
    const isMatch = await comparePassword(req.body.password, user);
    if (isMatch) {
      const token = await generateToken(user);
      if (token) {
        return res.status(200).json({
          status: "success",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
          token: token,
        });
      }
      res.status(401).json({
        success: "false",
        message: "Authentication failed",
      });
    }
    res.status(401).json({
      success: "false",
      message: "Authentication failed",
    });
  } catch (e) {
    res.status(401).json({
      success: "false",
      message: "Authentication failed",
    });
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
    });
    if (user) {
      return res.status(201).json({
        status: "success",
        users: user,
      });
    } else {
      res.status(400).json({
        success: "false",
        message: "cannot store user",
      });
    }
  } catch (e) {
    res.status(400).json({
      success: "false",
    });
  }
};
