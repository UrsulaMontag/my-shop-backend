import Product from "../../../src/models/Product";

export default async function handler(req, res) {
  const { id } = req.query;
  /*  const cards = getCards();
  const singleCard = cards.find((card) => card.id === id); */

  if (req.method === "DELETE") {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "card deleted",
      card: deletedCard,
    });
  } else {
    const singleProduct = await Product.findById(id);
    res.status(200).json(singleProduct);
  }
}

// else if (req.method === "PUT") {
//     const data = JSON.parse(req.body);
//     const changedCard = await Card.findByIdAndUpdate(id, data, { new: true });
//     res.status(200).json({ message: "card updated", card: changedCard });
//   }
