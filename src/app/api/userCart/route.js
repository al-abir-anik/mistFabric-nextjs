import { NextResponse } from "next/server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const { cartItems } = await req.json();
    const ids = cartItems.map((item) => new ObjectId(item.id));
    const collection = dbConnect(collectionNames.allProductCollection);

    const products = await collection
      .aggregate([
        { $match: { _id: { $in: ids } } },
        {
          $project: {
            name: 1,
            offerPrice: 1,
            images: { $arrayElemAt: ["$images", 0] },
          },
        },
      ])
      .toArray();

    const cartProducts = products.map((product) => {
      const match = cartItems.find(
        (item) => item.id === product._id.toString()
      );
      return {
        ...product,
        quantity: match?.quantity || 1,
      };
    });

    return NextResponse.json(cartProducts);
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { error: "Failed to fetch cart product" },
      { status: 500 }
    );
  }
}
