import { Schema, model } from "mongoose";

type User = {
  name: string;
  email: string;
};

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const userModel = model<User>("User", userSchema);
