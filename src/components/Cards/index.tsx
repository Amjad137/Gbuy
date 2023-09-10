import { productProps } from "@/store/collection-store";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

const Cards = (props: productProps) => {
  return (
    <>
      <Link href={`/products/${props.id}`}>
        <div className="flex flex-col rounded-lg m-4 border shadow-md border-gray-500 bg-gray-200 overflow-hidden w-52 h-72 md:w-60 md:h-96">
          <div className="w-full" style={{ height: "60%" }}>
            <Image
              src={props.image}
              alt="Product image"
              width={1920}
              height={720}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="flex gap-0.5 flex-col w-full p-2 justify-between "
            style={{ height: "30%" }}
          >
            <h2 className="block w-full whitespace-nowrap overflow-clip text-ellipsis text-sm md:font-medium md:text-lg ">
              {props.name}
            </h2>
            <p className="inline-block whitespace-nowrap overflow-clip text-ellipsis">
              {props.description}
            </p>
            <p className="inline font-bold text-lg text-orange-600 whitespace-nowrap overflow-clip text-ellipsis">{`LKR ${props.price}/-`}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
