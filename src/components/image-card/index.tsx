import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageLink = () => {
  return (
    <div className="cursor-pointer flex-col flex md:flex-row justify-center items-center md:p-12 m-5 gap-4">
      <div className="group flex flex-col items-center justify-center">
        <Link href="https://www.apple.com/iphone-14/" target="_blank">
          <Image
            src="https://m-cdn.phonearena.com/images/hub/216-wide-two_1200/iPhone-15-release-date-predictions-price-specs-and-must-know-features.webp?1693484327"
            alt="Image of an iPhone"
            width={720}
            height={500}
            className="rounded-lg border h-20 w-40 md:h-40 md:w-80 border-blue-800 transition-transform transform hover:scale-105"
          />
          <p className="text-center mt-2">iPhone 14</p>
          <div className="hidden group-hover:block absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="hidden group-hover:flex absolute inset-0 items-center justify-center text-white font-semibold">
            View Details
          </div>
        </Link>
      </div>

      <div className="group flex flex-col items-center justify-center">
        <Link href="https://www.apple.com/store" target="_blank">
          <Image
            src="https://applemagazine.com/wp-content/uploads/2021/03/apple-products.jpg"
            alt="Picture of the author"
            width={720}
            height={500}
            className="rounded-lg border h-20 w-40 md:h-40 md:w-80 border-blue-800 transition-transform transform hover:scale-105 object-cover"
          />
          <p className="text-center mt-2">Apple Product</p>
          <div className="hidden group-hover:block absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="hidden group-hover:flex absolute inset-0 items-center justify-center text-white font-semibold">
            View Details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageLink;
