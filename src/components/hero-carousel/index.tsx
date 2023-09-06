import React from "react";
import Image from "next/image";

//type Props = {};

const HeroCarousel = () => {
  return (
    <div className=" ">
      <Image
        src=" https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/military-landing-202209?wid=1904&hei=538&fmt=png-alpha&.v=1674593126557"
        alt="Picture of the author"
        width={800}
        height={0}
        layout="responsive"
        className=" "
      />
    </div>
  );
};

export default HeroCarousel;
