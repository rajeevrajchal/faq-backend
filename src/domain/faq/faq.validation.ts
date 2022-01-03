import { check } from "express-validator";

export const createFaqValidation: any = [
  check("title").not().isEmpty().withMessage("Title is required."),
  check("description").not().isEmpty().withMessage("Description is required"),
  check("userID").not().isEmpty().withMessage("User is required"),
];
