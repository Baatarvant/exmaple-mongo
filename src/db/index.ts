import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("");
    console.log();
  } catch (error) {
    console.log(error);
  }
};
