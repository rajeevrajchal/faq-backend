import { rString, uObject, dNumber } from "../../configs/fields";
import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    description: rString,
    user: uObject,
    vote: dNumber,
    faq: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "faqs",
    },
  },
  { timestamps: true }
);

const Comments = mongoose.model("comments", commentSchema);
export default Comments;
