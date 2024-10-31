import { Request, Response } from "express";
import { blogModel } from "../model/blogs.model";

export const addBlog = async (_req: Request, res: Response) => {
  console.log("duudagdaj bna");
  try {
    const blog = await blogModel.create({
      title: "San marino",
      userId: "6722fa97f1cef1db1ad47d5e",
    });

    res.json(blog);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
