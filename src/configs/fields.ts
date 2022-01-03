import mongoose from "mongoose";

export const rString = {
  type: String,
  required: true,
};
export const ruString = {
  type: String,
  unique: true,
  required: true,
};
export const dString = {
  type: String,
  default: "",
  required: false,
};
export const uString = {
  type: String,
  required: false,
};

export const rEmail = {
  type: String,
  required: true,
  unique: true,
};
export const urEmail = {
  type: String,
  required: true,
  unique: true,
};

export const uEmail = {
  type: String,
  required: false,
  unique: true,
};

export const unEmail = {
  type: String,
  required: false,
  unique: false,
};

export const rNumber = {
  type: Number,
  required: true,
  default: 0,
};
export const dNumber = {
  type: Number,
  default: 0,
  required: false,
};
export const uNumber = {
  type: Number,
  required: false,
};

export const rBool = {
  type: Boolean,
  required: true,
};

export const dBool = {
  type: Boolean,
  default: false,
  required: false,
};

export const uBool = {
  type: Boolean,
  required: false,
};

export const rArray = {
  type: Array,
  default: [],
  required: true,
};
export const dArray = {
  type: Array,
  default: [],
  required: false,
};
export const uArray = {
  type: Array,
  required: false,
  default: undefined,
};

export const rObject = {
  type: Object,
  required: true,
};
export const dObject = {
  type: Object,
  default: {},
  required: false,
};
export const uObject = {
  type: Object,
  required: false,
};

export const rEnum = (values: any) => ({
  type: String,
  enum: values,
  required: true,
});
export const dEnum = (values: any, dValue: any) => ({
  type: String,
  enum: values,
  default: dValue,
  required: false,
});
export const uEnum = (values: any) => ({
  type: String,
  enum: values,
  required: false,
});

export const relation = (model: any) => ({
  type: mongoose.Schema.Types.ObjectId,
  ref: model,
});
