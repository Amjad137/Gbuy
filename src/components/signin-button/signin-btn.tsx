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
      <div className="text-gray-200 hover:text-gray-800">
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
