import Link from "next/link";
import React, { useState, useEffect } from "react";
import SigninBtn from "../signin-button/signin-btn";

const Navbar = () => {
  return (
    <div className="flex bg-blue-800 justify-between items-center px-4 py-2 w-full">
      <a className="text-white text-lg">GBuy</a>
      <ul className="flex space-x-4">
        <li>
          <SigninBtn />
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" href="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
