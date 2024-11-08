import express from "express";
import { userRouter } from "./router/user.router";
import { connect } from "./db";
import { productRouter } from "./router/product.router";
import { orderRouter } from "./router/order.router";

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connect();

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
