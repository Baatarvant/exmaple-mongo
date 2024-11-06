import { Request, Response } from "express";
import { userModel } from "../model/users.model";
import "dotenv";

export const me = async (req: Request, res: Response) => {
  const { email } = req?.user;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
