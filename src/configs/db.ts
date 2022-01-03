import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://rajeev:rajeev12345@cluster0.smiww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 1,
  connectTimeoutMS: 30000,
};

const connectDB = async () => {
  await mongoose.connect(MONGODB_URI, options);
};

export default connectDB;
