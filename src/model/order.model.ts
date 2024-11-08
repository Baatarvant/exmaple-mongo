import mongoose, { Schema } from "mongoose";

type Order = {
  userId: Schema.Types.ObjectId;
  orderStatus: "Ordered" | "PreparingToShip" | "Shipped" | "Delivered";
  totalPrice: string;
  orderItem: Schema.Types.ObjectId[];
};

const OrderSchema = new Schema<Order>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    orderStatus: {
      type: String,
      enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
      default: "Ordered",
      required: true,
    },
    totalPrice: { type: String, required: true },
    orderItem: [{ type: Schema.Types.ObjectId, ref: "OrderItem" }],
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model<Order>("Order", OrderSchema);

export default OrderModel;
