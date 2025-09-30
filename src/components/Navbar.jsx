"use client";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import Search from "./Search";

const Navbar = () => {
  const { userCart } = useAppContext();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="w-full py-1.5 font-medium text-sm text-white text-center bg-gradient-to-r from-purple-500 via-[#9938CA] to-[#E0724A]">
          <div className="w-3/4 mx-auto flex items-center justify-center gap-5">
            <p>🚚 Free Shipping all over the country</p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="font-normal text-gray-800 py-2 rounded-full cursor-pointer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="12.532"
                    width="17.498"
                    height="2.1"
                    rx="1.05"
                    transform="rotate(-45.74 0 12.532)"
                    fill="#fff"
                  />
                  <rect
                    x="12.533"
                    y="13.915"
                    width="17.498"
                    height="2.1"
                    rx="1.05"
                    transform="rotate(-135.74 12.533 13.915)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="w-3/4 mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="relative text-3xl font-bold text-slate-700">
          <span className="text-primary">mist</span>Fabric
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          <Link
            href={"/"}
            className={`hover:text-primary transition ${
              pathname === "/" && "text-primary font-medium"
            }`}
          >
            Home
          </Link>
          <Link
            href={"/collection"}
            className={`hover:text-primary transition ${
              pathname === "/collection" && "text-primary font-medium"
            }`}
          >
            Collection
          </Link>
          <Link
            href={"/myOrders"}
            className={`hover:text-primary transition ${
              pathname === "/myOrders" && "text-primary font-medium"
            }`}
          >
            My Orders
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Search */}
          <Search />

          {/* Cart link */}
          <Link href={"/cart"} className="w-10 relative cursor-pointer">
            <PiShoppingCartSimple className="text-2xl mx-auto opacity-80" />
            <button className="absolute -top-2 -right-2 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {userCart.length}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
