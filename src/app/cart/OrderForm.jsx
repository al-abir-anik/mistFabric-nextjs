import { useAppContext } from "@/context/AppContext";
import { getGuestUserId } from "@/utils/GuestUser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OrderForm = ({ setShowOrderModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { userCart, cartItems, setUserCart } = useAppContext();
  const [orderLoading, setOrderLoading] = useState(false);

  // order amount calculation
  const subtotal = cartItems.reduce((total, product) => {
    return total + product.offerPrice * product.quantity;
  }, 0);
  const shippingFee = 0;
  const tax = parseFloat((subtotal * 0.02).toFixed(2));
  const totalAmount = subtotal + shippingFee + tax;

  const handlePlaceOrder = async (data) => {
    setOrderLoading(true);
    try {
      const { phoneNumber, address } = data;
      const guestUserId = getGuestUserId();
      const orderData = {
        guestUserId,
        phoneNumber,
        address,
        cartItems,
        totalAmount,
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) {
        throw new Error("Failed to place order");
        toast.error("Failed to place order");
      }

      const result = await res.json();
      console.log("Order placed:", result);
      // localStorage.removeItem("cart");
      setUserCart([]);
      reset();
      // toast.success("Order placed successfully!");
      setShowOrderModal(true);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handlePlaceOrder)}
      className="max-w-sm w-full h-fit text-black/90 bg-gray-100/40 p-5 mt-12 sm:mt-16 border border-gray-300/70 sticky top-0"
    >
      <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
      <hr className="border-gray-300 my-5" />

      <div className="space-y-3">
        {/* phone number */}
        <div className="w-full  space-y-1">
          <p className="text-sm font-medium uppercase">Phone Number</p>
          <input
            {...register("phoneNumber", {
              minLength: {
                value: 11,
                message: "enter a valid phone number.",
              },
              pattern: {
                value: /^01[0-9]{9}$/,
                message: "enter a valid phone number",
              },
            })}
            className="w-full p-2 bg-white border border-gray-200 rounded outline-primary"
            type="tel"
            placeholder="enter your number"
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-400 text-xs mt-2">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        {/*     address     */}
        <div className="w-full space-y-1">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <textarea
            {...register("address", {
              minLength: {
                value: 5,
                message: "add a proper address",
              },
            })}
            rows={2}
            className="w-full p-2 bg-white rounded border border-gray-200 resize-none outline-primary"
            placeholder="enter delivery address"
            required
          ></textarea>
          {errors.address && (
            <p className="text-red-400">{errors.address.message}</p>
          )}
        </div>
      </div>

      <hr className="border-gray-300 my-5" />

      <div className="space-y-4">
        <div className="flex justify-between text-base font-medium">
          <p className="text-gray-600">Products</p>
          <p className="text-gray-800">Tk. {subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="font-medium text-gray-800">
            {shippingFee === 0 && "Free"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Tax (2%)</p>
          <p className="font-medium text-gray-800">Tk. {tax}</p>
        </div>
        <div className="pt-3 flex justify-between text-lg md:text-xl font-medium border-t border-gray-300">
          <p>Total</p>
          <p>Tk. {totalAmount}</p>
        </div>
      </div>

      <button
        // onClick={() => setShowCheckoutModal(true)}
        // type="button"
        disabled={orderLoading || userCart.length === 0}
        className="w-full h-12 mt-6 bg-primary text-white font-medium hover:bg-orange-700 disabled:bg-primary/50 disabled:cursor-not-allowed cursor-pointer"
      >
        {orderLoading ? (
          <div className="w-5 h-5 mx-auto border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Place Order"
        )}
      </button>
    </form>
  );
};

export default OrderForm;
