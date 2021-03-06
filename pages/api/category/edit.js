import { dbConnect } from "../../../src/lib/database";
import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const newCategoryData = JSON.parse(req.body);
    await dbConnect();

    const newCategory = await Category.findByIdAndUpdate(
      newCategoryData.id,

      { name: newCategoryData.name, description: newCategoryData.description }
    );

    res.status(200).json({
      message: "category edited",
      product: newCategory,
    });
  } else {
    res.status(400).json({ error: "wrong method" });
  }
}
