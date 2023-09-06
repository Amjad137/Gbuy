import { productProps } from "@/store/collection-store";
import Image from "next/image";

const Cards = (props: productProps) => {
  return (
    <>
      <div className="flex flex-col rounded-lg m-4 border shadow-md border-gray-500 overflow-hidden w-80 h-96">
        <Image
          src={props.image}
          alt="Product image"
          width={1920}
          height={720}
          className="w-80 h-60 object-cover"
        />

        <div className="flex gap-1 flex-col p-4">
          <h1 className="inline font-bold text-xl text-ellipsis overflow-clip">{`LKR ${props.price}/-`}</h1>
          <h2 className="inline font-medium text-xl text-ellipsis overflow-clip">
            {props.name}
          </h2>
          <h3 className="inline-block overflow-clip text-ellipsis">
            {props.description}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Cards;
