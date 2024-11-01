import express from "express";
import { userRouter } from "./router/user.router";
import { connect } from "./db";

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connect();

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
