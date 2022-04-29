import Category from "../models/Category";
import dbConnect from "../lib/database";

export default async function getCategories() {
  await dbConnect();

  const data = await Category.find();
  return data.map(({ id, content, user }) => ({
    id,
    content,
    name: category.name,
  }));
}
