import Image from "next/image";

type CardProps = {
  Name: string;
  Description: string;
  Price: number;
  Image: string;
};

const Cards = (props: CardProps) => {
  return (
    <>
      <div className="flex flex-col rounded-lg m-4 border shadow-md border-gray-500 overflow-hidden w-80 h-96">
        <Image
          src={props.Image}
          alt="Product Image"
          width={200}
          height={200}
          className="w-80 h-60 object-cover"
        />

        <div className="flex gap-1 flex-col p-4">
          <h1 className="inline font-bold text-xl text-ellipsis overflow-clip">{`LKR ${props.Price}/-`}</h1>
          <h2 className="inline font-medium text-xl text-ellipsis overflow-clip">
            {props.Name}
          </h2>
          <h3 className="inline-block overflow-clip text-ellipsis">
            {props.Description}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Cards;
