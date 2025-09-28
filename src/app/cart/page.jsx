import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

const Cart = () => {
  const cartItems = [
    {
      name: "Girls Cotton Round Neck Tee",
      description:
        "Soft cotton t-shirt for girls, casual and easy to pair with jeans or skirts.",
      regularPrice: 220,
      offerPrice: 200,
      images: ["https://i.ibb.co.com/gb53nk8W/p-img3.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      isStock: true,
      bestseller: false,
    },
    {
      name: "Men Slim Fit Denim Jacket",
      description:
        "Stylish slim-fit denim jacket for men, perfect for casual outings and layering.",
      regularPrice: 260,
      offerPrice: 230,
      images: ["https://i.ibb.co.com/7x6VJY5s/p-img28.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      isStock: true,
      bestseller: false,
    },
  ];

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto py-6 lg:py-16 flex flex-col lg:flex-row justify-around">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-medium mb-10">
          Shopping Cart{" "}
          <span className="text-sm text-primary pl-3">
            {cartItems.length} Items
          </span>
        </h1>

        {/* Cart table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {/* Cart product details */}
        {cartItems.length === 0 ? (
          <p className="min-h-60 md:min-h-80 grid place-items-center text-lg text-gray-400">
            Your cart is empty!
          </p>
        ) : (
          cartItems.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-6"
            >
              {/* product column */}
              <div className="flex md:gap-6 gap-3">
                <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden cursor-pointer">
                  <Image
                    className="max-w-full h-full object-cover"
                    src={product.images[0]}
                    alt={product.name}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base lg:text-lg font-semibold">
                    {product.name}
                  </p>
                  <div className="font-normal text-gray-500/70">
                    <p>
                      Tk. <span>{product.offerPrice || "N/A"}</span>
                    </p>
                    {/* handle quantity */}
                    {/* <div className="flex flex-col md:flex-row  md:items-center gap-2 mt-2">
                      <p className="hidden md:block">Qty:</p>
                      <div className="flex items-center justify-center px-1 gap-2 bg-primary/10 rounded select-none">
                        <button
                          onClick={() =>
                            handleQuantity(
                              product._id,
                              product.quantity,
                              "decrease"
                            )
                          }
                          className="w-5 h-full text-md px-1 outline-none cursor-pointer"
                        >
                          {qtyLoading?.[product._id]?.decrease ? (
                            <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            "-"
                          )}
                        </button>
                        <span className="w-5 text-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantity(
                              product._id,
                              product.quantity,
                              "increase"
                            )
                          }
                          className="w-5 h-full text-md px-1 outline-none cursor-pointer "
                        >
                          {qtyLoading?.[product._id]?.increase ? (
                            <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            "+"
                          )}
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* subtotal column */}
              <p className="text-center">${product.offerPrice * 2}</p>
              {/* action column */}
              {/* <button
                onClick={() => handleRemoveCartItem(product._id)}
                disabled={rmvBtnLoading[product._id]}
                className="mx-auto p-1.5 border border-red-300 hover:bg-red-50 rounded-full cursor-pointer "
              >
                {rmvBtnLoading[product._id] ? (
                  <div className="w-3 h-3 mx-auto border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <MdDeleteOutline className="text-xl text-red-400" />
                )}
              </button> */}
            </div>
          ))
        )}

        <Link
          href="/all-products"
          className="w-fit h-8 group cursor-pointer flex items-center mt-10 gap-2 text-primary font-medium"
        >
          <HiArrowLongLeft className="group-hover:-translate-x-1 transition" />
          Continue Shopping
        </Link>
      </div>

      {/* --- Checkout Form ---  */}
      {/* <OrderForm /> */}
    </div>
  );
};

export default Cart;
