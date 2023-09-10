import { useState, useEffect } from "react";
import React from "react";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Link from "next/link";
import { useAuthStore } from "@/store/auth-store";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "@/store/cart-store";
const SigninBtn = () => {
  const { user, setUser } = useAuthStore((s) => ({
    user: s.user,
    setUser: s.setUser,
  }));

  const { setCart } = useCartStore((s) => ({
    setCart: s.setCart,
  }));
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
    // setCart([]);
  };

  if (user) {
    return (
      <div className="flex items-center justify-center text-gray-200 hover:text-gray-800">
        <button onClick={signOutUser}>SignOut</button>
      </div>
    );
  } else {
    return (
      <Link className="text-gray-200 hover:text-gray-800" href="/login">
        Signin
      </Link>
    );
  }
};

export default SigninBtn;
