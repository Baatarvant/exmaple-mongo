import mongoose from "mongoose";
import "dotenv/config";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("connected db");
  } catch (error) {
    console.log(error);
  }
};
