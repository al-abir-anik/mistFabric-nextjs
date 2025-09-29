"use client";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import OrderForm from "./OrderForm";
import { useState } from "react";
import PaymentModal from "@/components/PaymentModal";

const Cart = () => {
  const {
    cartItems,
    cartPageLoading,
    removeCartItem,
    increaseQty,
    decreaseQty,
  } = useAppContext();

  const [showOrderModal, setShowOrderModal] = useState(false);

  

  return (
    <div className="my-6 lg:my-10 lg:pb-8 flex flex-col lg:flex-row justify-between relative">
      <div className="flex-1 max-w-4xl">
        <div className="flex items-center justify-between mb-8 border-b border-gray-500/30 pb-6">
          <p className="text-2xl md:text-3xl text-gray-500">
            Your <span className="font-medium text-orange-600">Cart</span>
          </p>
          <p className="text-lg md:text-xl text-gray-500/80">
            {cartItems.length} Items
          </p>
        </div>

        {/* Cart table Header */}
        <div className="mb-8 grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium">
          <p className="text-left">Product Details</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Subtotal</p>
        </div>

        {/* Cart products */}
        {cartPageLoading ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="loader"></div>
          </div>
        ) : cartItems.length === 0 ? (
          <p className="min-h-[40vh] flex items-center justify-center">
            Your cart is empty!
          </p>
        ) : (
          <div className="min-h-[40vh]">
            {cartItems.map((product, index) => (
              <div
                key={index}
                className="mt-6 lg:mt-8 grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium"
              >
                {/* product column */}
                <div className="flex md:gap-6 gap-3">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-28 lg:h-28 overflow-hidden cursor-pointer">
                    <Image
                      className="max-w-full h-full object-cover"
                      src={product.images}
                      alt={product.name}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm lg:text-base">{product.name}</p>
                    <p>
                      Tk. <span>{product.offerPrice || "N/A"}</span>
                    </p>
                    <button
                      onClick={() => removeCartItem(product._id)}
                      className="p-1.5 text-xs text-red-600 hover:bg-red-50 border border-primary/30 rounded cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* quantity column */}
                <div className="mb-4 flex flex-col md:flex-row md:items-center justify-center gap-2">
                  <div className="flex items-center justify-center px-1 gap-2 bg-primary/10 rounded select-none">
                    <button
                      onClick={() => decreaseQty(product._id)}
                      className="w-5 h-full text-md px-1 outline-none cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-5 text-center">{product.quantity}</span>
                    <button
                      onClick={() => increaseQty(product._id)}
                      className="w-5 h-full text-md px-1 outline-none cursor-pointer "
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* subtotal column */}
                <p className="mb-4 text-center">
                  ${product.offerPrice * product.quantity}
                </p>
              </div>
            ))}
          </div>
        )}

        <Link
          href="/collection"
          className="w-fit h-8 group cursor-pointer flex items-center mt-10 gap-2 text-primary font-medium"
        >
          <HiArrowLongLeft className="group-hover:-translate-x-1 transition" />
          Continue Shopping
        </Link>
      </div>

      {/* --- Checkout Form ---  */}
      <OrderForm setShowOrderModal={setShowOrderModal} />

      {/* Payment successful Modal */}
      {showOrderModal && <PaymentModal setShowOrderModal={setShowOrderModal} />}
    </div>
  );
};

export default Cart;
