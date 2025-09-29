import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const { search } = Object.fromEntries(req.nextUrl.searchParams);
    const dbCollection = dbConnect(collectionNames.allProductCollection);

    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    const products = await dbCollection
      .find(query, {
        projection: {
          name: 1,
          offerPrice: 1,
          regularPrice: 1,
          images: { $slice: 1 },
        },
      })
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
