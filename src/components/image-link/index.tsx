import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageLink = () => {
  return (
    <div className="cursor-pointer flex justify-between items-center p-12 space-x-20">
      <Link href="/">
        <div className="relative group">
          <Image
            src="https://m-cdn.phonearena.com/images/hub/216-wide-two_1200/iPhone-15-release-date-predictions-price-specs-and-must-know-features.webp?1693484327"
            alt="Image of an iPhone"
            width={500}
            height={500}
            className="rounded-lg border border-blue-800 transition-transform transform hover:scale-105"
          />
          <p className="text-center mt-2">iPhone 15</p>
          <div className="hidden group-hover:block absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="hidden group-hover:flex absolute inset-0 items-center justify-center text-white font-semibold">
            View Details
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="relative group">
          <Image
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/military-landing-202209?wid=1904&hei=538&fmt=png-alpha&.v=1674593126557"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg border border-blue-800 transition-transform transform hover:scale-105 object-cover"
          />
          <p className="text-center mt-2">Apple Product</p>
          <div className="hidden group-hover:block absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="hidden group-hover:flex absolute inset-0 items-center justify-center text-white font-semibold">
            View Details
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageLink;
