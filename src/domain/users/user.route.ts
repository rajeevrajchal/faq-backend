import express from "express";
import { login, register } from "./user.controller";
import validateRule from "../../configs/validation";
import { loginValidation, registerValidation } from "./user.validation";

const userRoute = express.Router();

userRoute.post("/login", [validateRule, loginValidation], login);
userRoute.post("/register", [validateRule, registerValidation], register);

export default userRoute;
