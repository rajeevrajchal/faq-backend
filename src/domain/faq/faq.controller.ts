import { NextFunction, Request, Response } from "express";
import { createSlug } from "../../configs/slugify";
import User from "../users/user.schema";
import Faq from "./faq.schema";

export const createFaq = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, userID } = req.body;
    const user = await User.findById(userID);
    if (!user) {
      res.status(401).json({
        success: "false",
        message: "user not found",
      });
    }
    const faq = await Faq.create({
      slug: createSlug(`${title.toLowerCase()}${Date.now()}`),
      title: title.toLowerCase(),
      description,
      user: {
        _id: userID,
        email: user.email,
      },
    });
    if (!faq) {
      return res.status(422).json({
        success: "false",
        message: "cannot store faq",
      });
    }
    return res.status(201).json({
      status: "success",
      faq: faq,
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
    });
  }
};

export const getFaqs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryString: any = req.query.query;
    const faqs = await Faq.find({
      title: {
        $regex: `${queryString}`,
      },
    });
    return res.status(200).json({
      status: "success",
      faqs: faqs,
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
    });
  }
};

export const getFaqDetailById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const faq = await Faq.findOne({ slug: req.params.slug }).populate(
      "comments"
    );
    if (!faq) {
      return res.status(404).json({
        success: "false",
        message: "faq not found",
      });
    }
    return res.status(200).json({
      status: "success",
      faq,
    });
  } catch (e) {
    res.status(400).json({
      success: "false",
    });
  }
};
