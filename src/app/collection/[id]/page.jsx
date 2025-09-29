import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import ProductActions from "./ProductActions";
import ProductCard from "@/components/ProductCard";
import new_collections from "@/assets/new_collections";

const ProductDetailsPage = async ({ params }) => {
  const productId = await params;
  const productsCollection = dbConnect(collectionNames.allProductCollection);
  const product = await productsCollection.findOne({
    _id: new ObjectId(productId.id),
  });

  const {
    _id,
    name,
    category,
    regularPrice,
    offerPrice,
    images,
    description,
    sizes,
    inStock,
  } = product;

  return (
    <div className="w-[90%] mx-auto mt-10 mb-20">
      <p className="mb-10 text-sm">
        <span className="text-gray-600"> {category} /</span>{" "}
        <span className="text-primary/90">{name}</span>
      </p>

      <div className="flex flex-col sm:flex-row justify-between gap-16">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-6">
          <div className="w-full sm:w-[16%] flex sm:flex-col justify-between sm:justify-normal gap-3">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="product-image"
                className="w-[20%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                width={100}
                height={100}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%] rounded overflow-hidden">
            <Image
              src={images[0]}
              alt="product-image"
              className="w-full h-auto object-cover"
              width={2000}
              height={2000}
            />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-medium mt-2">{name}</h1>
          {/* rating star */}
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={
                    i < 4 ? "/icons/star_icon.png" : "/icons/star_dull_icon.png"
                  }
                  alt=""
                  className="w-3 md:w-3.5"
                />
              ))}
            <p className="text-sm ml-2">(4.5)</p>
          </div>

          <div className="mt-4">
            <p className="md:w-4/5 pt-3 mb-5 text-gray-500">{description}</p>
            <p className="text-2xl font-medium">
              Tk. {offerPrice}
              <span className="pl-2 text-lg text-gray-400 line-through">
                Tk. {regularPrice}
              </span>
            </p>
            <span className="text-xs text-gray-500">
              (Tax included. Shipping calculated at checkout.)
            </span>
          </div>

          <p
            className={`text-lg font-medium mt-6 ${
              inStock ? "text-primary" : "text-red-400"
            }`}
          >
            {inStock ? "In Stock" : "Stock Out"}
          </p>

          <ProductActions _id={_id.toString()} sizes={sizes} />
        </div>
      </div>

      {/* ------Related Products-------- */}
      <div className="flex flex-col items-center mt-16">
        <div className="py-10 flex flex-col items-center w-max">
          <h3 className="text-3xl font-medium">Related Products</h3>
          <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly gap-3 md:gap-6">
          {new_collections.map((p, index) => (
            <ProductCard
              key={index}
              product={p}
              // handleAddToCart={handleAddToCart}
              // cartBtnLoading={cartBtnLoading}
            />
          ))}
        </div>
        <Link
          href="/all-products"
          className="mx-auto px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition cursor-pointer"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
