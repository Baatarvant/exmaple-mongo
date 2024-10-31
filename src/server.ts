import express from "express";
import { connect } from "./db";
import { addUser } from "./controller/add-user";
import { addBlog } from "./controller/add-blog";
import { getBlogs } from "./controller/get-blogs";

export const app = express();
const port = process.env.PORT || 3000;

connect();

const userRouter = express.Router();
userRouter.post("/", addUser);
userRouter.get("/", addBlog);
userRouter.get("/blogs", getBlogs);

// const blogRouter = express.Router();
// userRouter.get("/", addBlog);

app.use("/users", userRouter);
// app.use("/blogs", blogRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
