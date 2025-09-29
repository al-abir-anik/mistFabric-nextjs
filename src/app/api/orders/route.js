import { NextResponse } from "next/server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

// PLACE ORDER FROM CART PAGE
export async function POST(req) {
  try {
    const { guestUserId, phoneNumber, address, cartItems, totalAmount } =
      await req.json();

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
      orderItem: cartItems,
      totalAmount,
      status: "pending",
      orderDate: new Date(),
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

// GET ALL ORDERS OF CURRENT USER
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const guestUserId = searchParams.get("guestUserId");

    if (!guestUserId) {
      return NextResponse.json(
        { error: "guestUserId is required" },
        { status: 400 }
      );
    }

    const collection = await dbConnect(collectionNames.orderCollection);
    const orders = await collection
      .find({ guestUserId })
      .sort({ createdAt: -1 }) // latest first
      .toArray();

    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
