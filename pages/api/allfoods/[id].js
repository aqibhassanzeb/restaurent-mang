import dbConnect from "../../../libs/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { text },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const response = await Product.find({ title: text });
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
