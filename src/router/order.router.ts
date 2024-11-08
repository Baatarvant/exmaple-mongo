import express from "express";
import { createOrder } from "../controller/order/create-order";
import { getOrders } from "../controller/order/get-orders";

export const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
