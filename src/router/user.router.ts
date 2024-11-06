import express from "express";
import { body } from "express-validator";
import { signUp } from "../controller/signup";
import { signIn } from "../controller/signin";
import { me } from "../controller/me";
import { authenticateToken } from "../middleware/authenticate-token";

export const userRouter = express.Router();

const addUserValidation = [
  body("firstN", "Invalid does not Empty").notEmpty(),
  body("email").isEmail(),
];

userRouter.post("/sign-up", signUp);
userRouter.post("/sign-in", signIn);
userRouter.post("/me", authenticateToken, me);
