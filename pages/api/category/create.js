export default function handler(req, res) {
  if (req.method === "POST") {
    const newCategory = JSON.parse(req.body);

    res.status(200).json({
      message: "category created",
      category: newCategory,
    });
  } else {
    res.status(400).json({ error: "wrong method" });
  }
}
