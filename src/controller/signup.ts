import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { userModel } from "../model/users.model";
import bcrypt from "bcrypt";

export const signUp = async (req: Request, res: Response) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   res.status(400).json({ message: "invalid inputs" });
  // }

  const { firstName, lastName, avatar, password, email } = req.body;
  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await userModel.create({
      firstName,
      lastName,
      avatar,
      password: hashedPassword,
      email,
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
