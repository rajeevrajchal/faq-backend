import mongoose, { Schema } from "mongoose";
import { rString, uObject } from "../../configs/fields";
const faqSchema = new Schema(
  {
    title: rString,
    slug: rString,
    description: rString,
    user: uObject,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  { timestamps: true }
);

const Faq = mongoose.model("faqs", faqSchema);
export default Faq;
