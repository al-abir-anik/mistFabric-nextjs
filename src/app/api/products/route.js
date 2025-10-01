// import dbConnect, { collectionNames } from "@/lib/dbConnect";

// export async function GET(req) {
//   try {
//     const { search } = Object.fromEntries(req.nextUrl.searchParams);
//     const dbCollection = dbConnect(collectionNames.allProductCollection);

//     const query = search ? { name: { $regex: search, $options: "i" } } : {};

//     const products = await dbCollection
//       .find(query, {
//         projection: {
//           name: 1,
//           offerPrice: 1,
//           regularPrice: 1,
//           images: { $slice: 1 },
//         },
//       })
//       .toArray();

//     return new Response(JSON.stringify(products), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify([]), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }



// /api/products/route.js
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") || "";
    const categories = url.searchParams.getAll("category"); // multiple allowed
    const subCategories = url.searchParams.getAll("subCategory");

    const dbCollection = dbConnect(collectionNames.allProductCollection);

    // Build query
    const query = {};
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    if (categories.length > 0) {
      query.category = { $in: categories };
    }
    if (subCategories.length > 0) {
      query.subCategory = { $in: subCategories };
    }

    const products = await dbCollection
      .find(query, {
        projection: {
          name: 1,
          offerPrice: 1,
          regularPrice: 1,
          images: { $slice: 1 },
          category: 1,
          subCategory: 1,
        },
      })
      .limit(50)
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


