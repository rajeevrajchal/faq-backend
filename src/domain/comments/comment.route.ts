import express from "express";
import validateRule from "../../configs/validation";
import validateToken from "../../middlewares/validateToken";
import { createComment, voteComment } from "./comment.controller";

const commentRoute = express.Router();
commentRoute.post("/create", [validateToken], createComment);
commentRoute.put("/vote/:commentID", [validateToken], voteComment);

export default commentRoute;
