import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { cartItems, setCartItems } = useAppContext();
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
    const { phoneNumber, address, payment } = data;

    try {
      const res = await axios.post(
        `https://freshbasket-server-seven.vercel.app/place-order`,
        {
          email: user?.email,
          userName: user?.displayName,
          phoneNumber,
          address,
          paymentMethod: payment,
          totalPrice: totalAmount,
        }
      );
      // check the response and update cartitems
      if (res.data.success) {
        const updated = await fetch(
          `https://freshbasket-server-seven.vercel.app/user-cart-items?email=${user?.email}`
        );
        const newData = await updated.json();
        setCartItems(newData);
        toast.success("Order Placed Successfully.");
      } else {
        toast.error("Order Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Order Failed:", error);
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <form
      // onSubmit={handleSubmit(handlePlaceOrder)}
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
        disabled={orderLoading}
        className="w-full h-12 mt-6 bg-primary text-white font-medium hover:bg-orange-700 cursor-pointer"
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
