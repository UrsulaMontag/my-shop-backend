import getCategories from "../../src/services/get-categories";

export default async function handler(req, res) {
  const categories = await getCategories();
  console.log(categories, "!!!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$!!");
  res.status(200).json(categories);
}
