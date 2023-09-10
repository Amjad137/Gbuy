"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PrevArrow, NextArrow } from "./arrows";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import Slider from "react-slick";

type imgType = {
  imageLink: string;
};

const HeroCarousel = () => {
  const [images, setImages] = useState<imgType[]>([]);

  const [value, Loading, error] = useCollection(
    collection(db, "heroCarouselImages")
  );

  useEffect(() => {
    if (!Loading && value) {
      const imagesData = value.docs.map((doc) => doc.data() as imgType);
      setImages(imagesData);
    }
  }, [Loading, value]);

  const settingLg = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "300px",
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "50px",
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="w-full h-56 md:h-80" key={index}>
              <Image
                src={image.imageLink}
                width={1920}
                height={720}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
                quality={100}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider {...settingLg}>
          {images.map((image, index) => (
            <div className="w-full h-56 md:h-80" key={index}>
              <Image
                src={image.imageLink}
                width={1920}
                height={720}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
                quality={100}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCarousel;
