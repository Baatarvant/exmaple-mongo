import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { userModel } from "../model/users.model";
import bcrypt from "bcrypt";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "" });
      return;
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
