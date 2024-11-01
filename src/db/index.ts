import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("");
    console.log("connected db");
  } catch (error) {
    console.log(error);
  }
};
