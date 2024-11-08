import mongoose, { Schema } from "mongoose";

type Product = {
  name: string;
  image: string;
  description: string;
  price: string;
};

const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: {
      type: String,
      required: true,
    },
    price: { type: String },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
