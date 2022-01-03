import { check } from "express-validator";

export const loginValidation: any = [
  check("description").not().isEmpty().withMessage("Description is required."),
  check("faqID").not().isEmpty().withMessage("faq is required."),
  check("userID").not().isEmpty().withMessage("user is required."),
];
