import { Schema, model } from "mongoose";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  password: string;
  role: "USER" | "ADMIN";
};

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  password: { type: String, required: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
});

export const userModel = model<User>("User", userSchema);
