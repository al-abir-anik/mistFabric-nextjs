import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const dbCollection = dbConnect(collectionNames.allProductCollection);

    const products = await dbCollection
      .find(
        { bestseller: true },
        {
          projection: {
            name: 1,
            offerPrice: 1,
            regularPrice: 1,
            images: { $slice: 1 },
          },
        }
      )
      .limit(10)
      .toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
