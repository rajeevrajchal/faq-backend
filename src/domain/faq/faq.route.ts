import express from "express";
import validateRule from "../../configs/validation";
import { createFaqValidation } from "./faq.validation";
import { createFaq, getFaqDetailById, getFaqs } from "./faq.controller";
import validateToken from "../../middlewares/validateToken";

const faqRoute = express.Router();

faqRoute.post(
  "/create",
  [validateRule, createFaqValidation, validateToken],
  createFaq
);

faqRoute.get("/search", getFaqs);
faqRoute.get("/:slug", getFaqDetailById);

export default faqRoute;
