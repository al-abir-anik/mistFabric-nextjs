"use client";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import Search from "./Search";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { userCart } = useAppContext();
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      {isOfferOpen && (
        <div className="w-full py-3 font-medium text-xs sm:text-sm text-white text-center bg-gradient-to-r from-purple-500 via-[#9938CA] to-[#E0724A]">
          <div className="w-3/4 mx-auto flex items-center justify-center gap-5">
            <p>🚚 Free Shipping all over the country</p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsOfferOpen(false)}
                type="button"
                className="font-normal text-white text-xl rounded-full cursor-pointer"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="w-[90%] md:w-3/4 mx-auto py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700"
        >
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
          <div className="hidden md:block">
            <Search />
          </div>

          {/* Cart link */}
          <Link href={"/cart"} className="w-10 relative cursor-pointer">
            <PiShoppingCartSimple className="text-2xl mx-auto opacity-80" />
            <button className="absolute -top-2 -right-2 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {userCart.length}
            </button>
          </Link>

          {/* Mobile Menu  */}
          <button
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            aria-label="Menu"
            className="lg:hidden"
          >
            {openMobileMenu ? (
              <IoClose className="text-2xl" />
            ) : (
              <RiMenu3Fill className="text-2xl" />
            )}
          </button>
        </div>

        {/* Small screen menus */}
        <div
          className={`${
            openMobileMenu ? "flex" : "hidden"
          } absolute top-28 left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-5 text-sm md:hidden z-999`}
        >
          <div className="block md:hidden">
            <Search />
          </div>

          <Link
            href="/"
            onClick={() => setOpenMobileMenu(false)}
            className="block"
          >
            Home
          </Link>
          <Link
            href="/collection"
            onClick={() => setOpenMobileMenu(false)}
            className="block"
          >
            Collection
          </Link>

          <Link
            href="/myOrders"
            onClick={() => setOpenMobileMenu(false)}
            className="block"
          >
            My Orders
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
