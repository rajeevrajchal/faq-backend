import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const generateToken = (user: { _id: string | number; name: string }) => {
  const secrete: string = "2740746318";

  const payload = {
    user: {
      id: user._id,
      name: user.name,
    },
  };
  return jwt.sign(payload, secrete, {
    algorithm: "HS256",
  });
};

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

export const comparePassword = (
  reqPassword: string,
  user: { password: string; name: string }
) => {
  return bcrypt.compare(reqPassword, user.password);
};
