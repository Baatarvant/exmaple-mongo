import mongoose, { Schema } from "mongoose";

export type OrderItem = {
  productId: Schema.Types.ObjectId;
  quantity: number;
  orderId?: Schema.Types.ObjectId;
};

const OrderItem = new Schema<OrderItem>(
  {
    productId: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
    quantity: { type: Number, required: true },
    orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  },
  {
    timestamps: true,
  }
);

const OrderItemModel = mongoose.model<OrderItem>("OrderItem", OrderItem);

export default OrderItemModel;
