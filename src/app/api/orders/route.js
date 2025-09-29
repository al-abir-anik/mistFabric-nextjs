import { NextResponse } from "next/server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

// PLACE ORDER FROM CART PAGE
export async function POST(req) {
  try {
    const { guestUserId, phoneNumber, address, cartItems } = await req.json();

    if (!phoneNumber || !address || !cartItems?.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const collection = dbConnect(collectionNames.orderCollection);
    const order = {
      guestUserId,
      phoneNumber,
      address,
      cartItems,
      status: "pending",
      createdAt: new Date(),
    };
    const result = await collection.insertOne(order);

    return NextResponse.json({
      success: true,
      orderId: result.insertedId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json(
      { error: "Failed to place order" },
      { status: 500 }
    );
  }
}


