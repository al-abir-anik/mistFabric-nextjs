"use client";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";

const ProductActions = ({ _id, sizes }) => {
  const { handleAddToCart } = useAppContext();
  const [selectedSize, setSelectedSize] = useState("");
  const isCarted = false;
  const cartBtnLoading = false;

  return (
    <div>
      {/* product size */}
      {/* <div className="flex flex-col gap-4">
        <p>Select Size</p>
        <div className="flex gap-3">
          {sizes.map((size, index) => (
            <button
              onClick={() => setSelectedSize(size)}
              key={index}
              className={`w-12 py-2 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer ${
                size === selectedSize ? "border border-primary" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div> */}

      {/* add to cart btn */}
      <button
        onClick={() => handleAddToCart(_id)}
        // disabled={isCarted || cartBtnLoading?.[_id]}
        className={`w-1/2 py-3.5 mt-4 mb-8 font-medium text-white bg-primary/80 transition-colors ${
          isCarted ? "cursor-not-allowed" : "hover:bg-primary cursor-pointer"
        }`}
      >
        {cartBtnLoading?._id ? (
          <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
        ) : isCarted ? (
          "Added in cart"
        ) : (
          "ADD TO CART"
        )}
      </button>
    </div>
  );
};

export default ProductActions;
