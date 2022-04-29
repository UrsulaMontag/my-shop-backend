import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});
const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);

export default Product;
