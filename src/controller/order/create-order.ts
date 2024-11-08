import { Request, Response } from "express";
import OrderModel from "../../model/order.model";
import OrderItemModel, { OrderItem } from "../../model/order-item.model";

export const createOrder = async (req: Request, res: Response) => {
  const { userId, orderItems } = req.body;

  try {
    const newOrderItems = await OrderItemModel.insertMany<OrderItem>(
      orderItems
    );

    const newOrderItemIds = newOrderItems.map(
      (newOrderItem) => newOrderItem._id
    );

    const order = await OrderModel.create({
      userId,
      orderStatus: "Ordered",
      totalPrice: 100,
      orderItem: newOrderItemIds,
    });

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
