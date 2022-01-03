import { NextFunction, Request, Response } from "express";
import Faq from "../faq/faq.schema";
import User from "../users/user.schema";
import Comments from "./comment.schema";

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { description, faqID, userID } = req.body;
    const user = await User.findById(userID);
    const faq = await Faq.findById(faqID);
    if (!faq || !user) {
      return res.status(401).json({
        success: "false",
        message: `${!user ? "user" : !faq ? "faq" : "user & faq"} not found`,
      });
    }
    const comment = await Comments.create({
      description,
      faq: faqID,
      user: {
        _id: userID,
        email: user.email,
      },
    });
    if (!comment) {
      res.status(400).json({
        success: "false",
      });
    }
    const faqUpdate = await Faq.findByIdAndUpdate(
      { _id: faqID },
      { $push: { comments: comment._id } }
    );
    return res.status(201).json({
      status: "success",
      comment,
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
    });
  }
};

export const voteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { commentID } = req.params;
    const { operator } = req.body;

    const comment = await Comments.findByIdAndUpdate(
      { _id: commentID },
      { $inc: { vote: operator === "upvote" ? 1 : -1 } },
      { new: true }
    );
    if (comment) {
      return res.status(201).json({
        status: "success",
        comment,
      });
    } else {
      res.status(400).json({
        success: "false",
      });
    }
  } catch (e) {
    res.status(400).json({
      success: "false",
    });
  }
};
