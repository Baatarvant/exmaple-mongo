import { Request, Response } from "express";
import { blogModel } from "../model/blogs.model";

export const getBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await blogModel.find().populate("userId");
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
