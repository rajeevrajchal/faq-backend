import mongoose, { Schema } from "mongoose";
import { rString, urEmail } from "../../configs/fields";
const userSchema = new Schema(
  {
    name: rString,
    email: urEmail,
    password: rString,
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
export default User;
