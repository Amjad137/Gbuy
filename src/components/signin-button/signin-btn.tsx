import { useState, useEffect } from "react";
import React from "react";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Link from "next/link";

const SigninBtn = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   console.log(user);
    });
    // return () => {
    //   listen();
    // };
  });

  const signOutUser = async () => {
    await signOut(auth);
    // window.location.href = "/";
  };

  if (user) {
    return (
      <div className="text-white hover:text-gray-300">
        <button onClick={signOutUser}>SignOut</button>
      </div>
    );
  } else {
    return (
      <Link className="text-white hover:text-gray-300" href="/login">
        Signin
      </Link>
    );
  }
};

export default SigninBtn;
