import express from "express";
import { addProduct } from "../controller/product/add-product";

export const productRouter = express.Router();

productRouter.post("/", addProduct);
