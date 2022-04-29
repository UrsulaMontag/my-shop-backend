import mongoose from "mongoose";

const url = "mongodb://27017/my-shop-backend";

export async function dbConnect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("ERROR, could not connect", error.message);
  }
}
