export default function handler(req, res) {
  if (req.method === "POST") {
    const newProduct = JSON.parse(req.body);

    res.status(200).json({
      message: "product created",
      product: newProduct,
    });
  } else {
    res.status(400).json({ error: "wrong method" });
  }
}
