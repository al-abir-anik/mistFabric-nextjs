"use client";
import new_collections from "@/assets/new_collections";
import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  //   const res = await fetch("/src/assets/new_collections.js");
  //   const data = await res.json;

  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-primary mt-2"></div>
      </div>

      <div className="grid grid-cols-5 place-items-center gap-y-10">
        {new_collections.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>

      <button
        onClick={() => {
          router.push("/all-products");
        }}
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:text-primary/90 hover:border-primary/80 cursor-pointer"
      >
        See more
      </button>
    </div>
  );
};

export default FeaturedProducts;
