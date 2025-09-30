"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Link from "next/link";

const FeaturedProducts = () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/bestSellers`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  // const featuredProducts = await res.json();

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch("/api/bestSellers");
        const data = await res.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="w-full py-6 space-y-12">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-primary mt-2"></div>
      </div>

      {loading ? (
        <p className="my-20 text-gray-700 text-center">
          Loading featured products...
        </p>
      ) : (
        <div className="grid grid-cols-5 place-items-center gap-y-10">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
      )}

      <div className="w-full py-5 flex justify-center">
        <Link
          href="/collection"
          className="px-12 py-2.5 border rounded text-gray-500/70 hover:text-primary/90 hover:border-primary/80 cursor-pointer"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
