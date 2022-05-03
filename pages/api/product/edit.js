import { dbConnect } from "../../../src/lib/database";
import Product from "../../../src/models/Product";
import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const newProductData = JSON.parse(req.body);
    await dbConnect();

    let category = await Category.findOne({ id: newProductData.category });

    const newProduct = await Product.updateOne(
      {
        id: newProductData.id,
      },
      {
        name: newProductData.name,
        description: newProductData.description,
        price: newProductData.price,
        tags: newProductData.tags,
        category: category.id,
      }
    );

    res.status(200).json({
      message: "product edited",
      product: newProduct,
    });
  } else {
    res.status(400).json({ error: "wrong method" });
  }
}
