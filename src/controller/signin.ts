import { Request, Response } from "express";
import { userModel } from "../model/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
      "secret",
      { expiresIn: "10h" }
    );

    res.json({
      user: {
        email: user.email,
        firstName: user.firstName,
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
