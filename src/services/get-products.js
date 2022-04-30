import Product from "../models/Product";
import { dbConnect } from "../lib/database";

export default async function getProducts() {
  await dbConnect();

  const products = await Product.find().populate("category");

  return products.map(({ id, content, name, category, price }) => {
    return {
      id,
      content,
      name,
      category,
      price,
    };
  });
}
