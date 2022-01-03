import mongoose, { Schema } from "mongoose";
import { rString } from "../../configs/fields";
const categorySchema = new Schema(
  {
    name: rString,
  },
  { timestamps: true }
);

const Category = mongoose.model("categories", categorySchema);
export default Category;
