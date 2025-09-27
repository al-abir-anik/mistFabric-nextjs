"use client";
import Link from "next/link";
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const Navbar = () => {
  const user = true;
  const isActive = false;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="w-full py-1.5 font-medium text-sm text-white text-center bg-gradient-to-r from-orange-500 via-[#E0724A] to-[#9938CA]">
          <div className="w-3/4 flex items-center justify-between mx-auto">
            <p>Get 20% OFF on Your First Order!</p>
            <div className="flex items-center space-x-6">
              <button
                type="button"
                className="font-normal text-gray-800 bg-white px-7 py-2 rounded-full max-sm:hidden"
              >
                Claim Offer
              </button>
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
          {user && (
            <Link
              href={"/admin"}
              className="py-1 px-3 text-xs border border-gray-300 rounded-full"
            >
              Admin Dashboard
            </Link>
          )}
          <Link
            href={"/"}
            className={`hover:text-primary transition ${
              isActive ? "text-primary font-medium" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href={"/collection"}
            className={`hover:text-primary transition ${
              isActive ? "text-primary font-medium" : ""
            }`}
          >
            Collection
          </Link>
          {user && (
            <Link
              href={"/my-orders"}
              className={isActive ? "text-primary font-medium" : ""}
            >
              My Orders
            </Link>
          )}

          {/* Search */}
          {/* <Search /> */}

          {/* Cart link */}
          <Link href={"/cart"} className="w-10 relative cursor-pointer">
            <PiShoppingCartSimple className="text-2xl mx-auto opacity-80" />
            <button className="absolute -top-2 -right-2 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {3}
            </button>
          </Link>

          {/* login and user */}
          {user ? (
            <div className="relative group">
              {/* <img
              src={assets.profile_icon || user.photoURL}
              alt="profile-image"
              className="w-10"
            /> */}
              <ul className="w-36 py-2.5 hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 rounded-md z-40">
                <li
                  onClick={() => setShowProfileModal(true)}
                  className="p-1.5 pl-5 hover:bg-primary/10 flex items-center gap-3 cursor-pointer"
                >
                  {/* <LuUser />  */}
                  Profile
                </li>
                <li
                  onClick={() => setShowLogoutModal(true)}
                  className="p-1.5 pl-5 text-red-400 hover:bg-red-50/90 flex items-center gap-3 cursor-pointer"
                >
                  {/* <LuLogOut /> */}
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-6">
              <button
                //   onClick={() => setShowRegisterForm(true)}
                className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
              >
                Login
              </button>
            </div>
          )}

          {/* logout modal */}
          {/* {showLogoutModal && (
          <div
            onMouseLeave={() => setShowLogoutModal(false)}
            className="py-6 px-5 flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow fixed top-16 right-19 z-99"
          >
            <span className="mx-auto p-3 bg-red-100 rounded-full">
              <LuLogOut className="text-xl text-red-500" />
            </span>
            <p className="text-gray-600 my-3 text-center">
              Do you really want to logout?
            </p>

            <div className="flex items-center justify-center gap-4 mt-3 w-full">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="w-full md:w-28 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSignOut}
                className="w-full md:w-28 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        )} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
