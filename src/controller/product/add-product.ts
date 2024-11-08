import { Request, Response } from "express";
import ProductModel from "../../model/product.model";

export const addProduct = async (req: Request, res: Response) => {
  const { name, description, image, price } = req.body;

  try {
    const product = await ProductModel.create({
      name,
      description,
      image,
      price,
    });

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
