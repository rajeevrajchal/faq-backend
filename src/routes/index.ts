import express, { Request, Response } from "express";

import commentRoute from "../domain/comments/comment.route";
import faqRoute from "../domain/faq/faq.route";
import userRoute from "../domain/users/user.route";

const router = express.Router();

router.use("/api", userRoute);
router.use("/api/faq", faqRoute);
router.use("/api/comment", commentRoute);

// simple route for demo
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to backend");
});

export default router;
