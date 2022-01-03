import { check } from "express-validator";

export const loginValidation: any = [
  check("password").not().isEmpty().withMessage("Password is required."),
  check("email").isEmail().withMessage("Email is not correct").normalizeEmail(),
];

export const registerValidation: any = [
  check("name").not().isEmpty().withMessage("Name is required."),
  check("password").not().isEmpty().withMessage("Password is required."),
  check("email").isEmail().withMessage("Email is not correct").normalizeEmail(),
];
