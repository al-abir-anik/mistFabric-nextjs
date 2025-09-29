"use client";
import { getGuestUserId } from "@/utils/GuestUser";
import Image from "next/image";
import { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const guestUserId = getGuestUserId();
        const res = await fetch(`/api/orders?guestUserId=${guestUserId}`);
        const data = await res.json();

        if (data.success) {
          setMyOrders(data.orders);
        }
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setFetchLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="w-4/5 min-h-[60vh] my-12 pb-8">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {fetchLoading ? (
        <div className="min-h-[40vh] flex items-center justify-center">
          <p className="pb-20 text-xl text-gray-600">Loading Orders...</p>
        </div>
      ) : myOrders.length === 0 ? (
        <p className="w-full min-h-[40vh] text-center text-gray-400 text-lg flex items-center justify-center">
          You have no orders.
        </p>
      ) : (
        myOrders.map((order, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg mb-10 p-5"
          >
            <div className="flex px-4 mb-3 justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
              <p className=" text-primary text-lg font-medium">
                Total Amount:{" "}
                <span className="text-black">Tk. {order.totalAmount}</span>
              </p>
              <span className="">
                OrderDate: {new Date(order.orderDate).toLocaleDateString()}
              </span>
              <span className="">Status: {order.status}</span>
            </div>

            {order.orderItem.map((item, idx) => (
              <div
                key={idx}
                className={`w-full p-4 py-6 bg-white text-gray-500/80 flex flex-col md:flex-row md:items-center justify-between ${
                  order.orderItem.length !== idx + 1
                    ? "border-b border-b-gray-200"
                    : ""
                }`}
              >
                <div className="w-2/5 flex mb-4 md:mb-0">
                  <Image
                    src={item.images}
                    alt="product-image"
                    className="object-cover"
                    width={80}
                    height={88}
                  />
                  <div className="pt-1 ml-4 space-y-2">
                    <h2 className="text-gray-800">{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>

                <div className="w-2/4 mb-4 md:mb-0 space-y-1 flex flex-col justify-center">
                  <p>
                    <span className="font-medium">Method:</span> COD
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {order.phoneNumber}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {order.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
