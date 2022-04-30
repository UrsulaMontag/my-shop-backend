import Product from "../models/Product";
import dbConnect from "../lib/database";

export default async function getProducts() {
  await dbConnect();

  const data = await Product.find().populate("category");
  return data.map(({ id, content, name, category, price }) => ({
    id,
    content,
    name,
    category,
    price,
  }));
}
