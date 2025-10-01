"use client";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

const Collection = () => {
  const { search } = useAppContext();
  const [allProducts, setAllProducts] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  // useEffect(() => {
  //   setFetchLoading(true);

  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch(
  //         `/api/products?search=${encodeURIComponent(search)}`
  //       );
  //       if (!res.ok) throw new Error("Failed to fetch products");
  //       const data = await res.json();
  //       setAllProducts(data || []);
  //     } catch (err) {
  //       console.error(err);
  //       setAllProducts([]);
  //     } finally {
  //       setFetchLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [search]);

  // handle category filter change

  useEffect(() => {
    setFetchLoading(true);

    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        selectedCategories.forEach((c) => params.append("category", c));
        selectedSubCategories.forEach((sc) => params.append("subCategory", sc));

        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setAllProducts(data || []);
      } catch (err) {
        console.error(err);
        setAllProducts([]);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchProducts();
  }, [search, selectedCategories, selectedSubCategories]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  // handle subCategory filter change
  const handleSubCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSubCategories((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  return (
    <div className="min-h-[80vh] flex flex-col lg:flex-row gap-6 sm:gap-10 mt-4 lg:mt-12 mb-16">
      {/* Filter options */}
      <div className="w-full sm:min-w-60 sm:w-60">
        <p className="my-2 text-xl flex items-center gap-2 sm:mb-4">FILTERS</p>

        {/* category filter */}
        <details className="sm:block border border-gray-300 rounded mb-4 sm:mb-6">
          <summary className="cursor-pointer px-5 py-3 text-sm font-medium bg-gray-50 sm:bg-transparent sm:cursor-default">
            CATEGORIES
          </summary>
          <div className="px-5 py-3 flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  value={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </details>

        {/* subcategory filter */}
        <details className="sm:block border border-gray-300 rounded">
          <summary className="cursor-pointer px-5 py-3 text-sm font-medium bg-gray-50 sm:bg-transparent sm:cursor-default">
            TYPE
          </summary>
          <div className="px-5 py-3 flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
              <label key={sub} className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  value={sub}
                  checked={selectedSubCategories.includes(sub)}
                  onChange={handleSubCategoryChange}
                />
                {sub}
              </label>
            ))}
          </div>
        </details>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between mb-5">
          <div className="flex flex-col">
            <p className="text-base sm:text-2xl font-medium">All Collection</p>
            <div className="w-28 h-0.5 bg-primary mt-2"></div>
          </div>
        </div>

        {fetchLoading ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="loader"></div>
          </div>
        ) : allProducts.length === 0 ? (
          <p className="min-h-[40vh] text-xl text-gray-700 flex items-center justify-center">
            No Product Found!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-y-10">
            {allProducts.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
