"use client";
import { ChevronLast } from "lucide-react";
import { ChevronFirst } from "lucide-react";
export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`custom-next-arrow bg-blue-500 text-white p-2 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-orange-600 transition-all duration-300 `}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLast />
    </button>
  );
};

export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`custom-prev-arrow bg-blue-500 text-white p-2 rounded-full absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-orange-600 transition-all duration-300 `}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronFirst />
    </button>
  );
};
