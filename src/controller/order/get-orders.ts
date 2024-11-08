import { Request, Response } from "express";
import OrderModel from "../../model/order.model";

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find()
      .populate("userId")
      .populate({
        path: "orderItem",
        populate: { path: "productId" },
      });

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
