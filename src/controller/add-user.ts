import { Request, Response } from "express";
import { userModel } from "../model/users.model";

export const addUser = async (_req: Request, res: Response) => {
  try {
    const user = await userModel.create({
      name: "bold",
      email: "bold@gmail.com",
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
