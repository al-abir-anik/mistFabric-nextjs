"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext(null);
// a Hook for easy import of App Context
export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const router = useRouter();

  // load user cart data
  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) setUserCart(JSON.parse(localCart));
  }, []);

  // load currentUser cart items with product details
  const [cartItems, setCartItems] = useState([]);
  const [cartPageLoading, setCartPageLoading] = useState(true);
  useEffect(() => {
    if (userCart.length === 0) {
      setCartItems([]);
      setCartPageLoading(false);
      localStorage.setItem("cart", JSON.stringify([]));
      return;
    }

    setCartPageLoading(true);

    fetch("/api/userCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems: userCart }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        setCartPageLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCartPageLoading(false);
      });

    localStorage.setItem("cart", JSON.stringify(userCart));
  }, [userCart]);

  // Add to cart
  const handleAddToCart = (id) => {
    setUserCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
    toast.success("Item added to cart");
  };

  // Remove from cart
  const removeCartItem = (id) => {
    setUserCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // sync immediately
      return updatedCart;
    });
    toast.info("Removed from cart");
  };

  // Update cart product quantity
  const [qtyLoading, setQtyLoading] = useState({});
  // Increase quantity
  const increaseQty = (id) => {
    setQtyLoading((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || {}), increase: true },
    }));

    setTimeout(() => {
      setUserCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );

      setQtyLoading((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || {}), increase: false },
      }));
    }, 400);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setQtyLoading((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || {}), decrease: true },
    }));

    setTimeout(() => {
      setUserCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );

      setQtyLoading((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || {}), decrease: false },
      }));
    }, 400);
  };

  const appInfo = {
    userCart,
    cartItems,
    cartPageLoading,
    handleAddToCart,
    removeCartItem,
    increaseQty,
    decreaseQty,
    qtyLoading,
  };

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};
