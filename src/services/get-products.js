import Product from "../models/Product";
import { dbConnect } from "../lib/database";

export default async function getProducts() {
  await dbConnect();

  const products = await Product.find();
  console.log("-------------------------------hallo-----------------------");

  return products.map(({ id, description, name, category, price, tags }) => {
    return {
      id,
      description,
      name,
      category,
      price,
      tags,
    };
  });
}
