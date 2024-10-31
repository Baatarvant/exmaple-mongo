import { Schema, model } from "mongoose";

type Blog = {
  title: string;
  userId: Schema.Types.ObjectId;
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export const blogModel = model<Blog>("Blog", blogSchema);
