"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SigninBtn from "../signin-button/signin-btn";
import { useAuthStore } from "@/store/auth-store";
import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { CartItem } from "@/store/cart-store";
let carts: CartItem[];
const Navbar = () => {
  const { user, loading, setLoading } = useAuthStore((s) => ({
    user: s.user,
    loading: s.loading,
    setLoading: s.setLoading,
  }));

  const { cart, setCart, userCart, setUserCart } = useCartStore((s) => ({
    cart: s.cart,
    userCart: s.userCart,
    setCart: s.setCart,
    setUserCart: s.setUserCart,
  }));

  useEffect(() => {
    const carts = cart.filter((each) => {
      if (each.id === user?.uid || "") {
        return [each];
      }
    });
    console.log({ carts: carts });
    setUserCart(carts);
    console.log({ cart: cart });
  }, [user, cart]);

  return (
    <div className="flex flex-row bg-orange-400 justify-between md:px-4 py-2 px-2 w-full">
      <div>
        <Link className="text-white text-xl font-bold" href="/">
          GBuy
        </Link>
      </div>
      <div className="flex flex-row w-40 md:w-60 items-center justify-between md:justify-end gap-1 md:gap-5">
        <div>
          <SigninBtn />
        </div>
        <div className="relative flex w-10 h-2 gap-1 mb-2.5">
          {userCart.length != 0 ? (
            <>
              <div className="absolute bottom-0 right-0">
                <h6 className="flex bg-gray-800 text-white text-xs w-4 h-4 rounded-full items-center justify-center">
                  {userCart.length}
                </h6>
              </div>
              <div className="absolute top-0 left-0 ">
                <ShoppingCart />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {user ? (
            <h1 className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-300">
              {user.email?.charAt(0).toUpperCase()}
            </h1>
          ) : (
            <Link className="text-gray-200 hover:text-gray-800" href="/signup">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
