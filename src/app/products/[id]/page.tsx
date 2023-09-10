"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { useCartStore } from "@/store/cart-store";
import { productProps } from "@/store/collection-store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { MapPin } from "lucide-react";
import { useProductsStore } from "@/store/collection-store";
import PosterSlider from "@/components/poster-slider";
import { useAuthStore } from "@/store/auth-store";
const ProductId = () => {
  const { products } = useProductsStore((s) => ({
    products: s.products,
  }));
  const params = useParams();

  const id = params.id;

  const productRef = doc(db, "productsData", id as string);
  const [productDataSnapshot, loading, error] = useDocument(productRef);

  const [product, setProduct] = useState<productProps | null>(null);

  useEffect(() => {
    if (productDataSnapshot) {
      if (productDataSnapshot.exists() !== undefined || null) {
        const productData = productDataSnapshot.data() as productProps;
        setProduct(productData);
      } else {
        console.log("Product not found");
      }
    }
  }, [productDataSnapshot]);

  const { user } = useAuthStore((s) => ({
    user: s.user,
  }));

  const { addToCartDB, cart } = useCartStore((s) => ({
    cart: s.cart,
    addToCartDB: s.addToCartDB,
  }));

  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const cartPrice = () => {
    if (product && product.price !== undefined && product.price != 0) {
      const originalPrice = product.price;
      const totalPrice = originalPrice * quantity;
      setPrice(totalPrice);
    }
  };

  useEffect(() => {
    cartPrice();
    console.log({ qty: quantity });
  }, [quantity, product]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const items = {
    id: user?.uid || "",
    name: product?.name || "",
    price: price,
    quantity: quantity,
  };

  const addCart = () => addToCartDB(items);

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading ? (
        <span>Products: Loading...</span>
      ) : (
        product && (
          // <div className="container">
          <div className="flex flex-row h-screen w-full p-5 gap-5">
            <div className="flex w-1/3 h-2/3 overflow-hidden">
              <Image
                src={product.image}
                alt="Product Image"
                width={1920}
                height={720}
                className="w-full h-full rounded-lg object-cover border border-gray-600"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <p className="text-2xl font-bold m-2 w-full break-words">
                {product?.name}
              </p>
              <p className="text-xl m-2 font-light w-full break-words">
                {product?.description}
              </p>

              <p className="text-xl m-2 font-bold w-full break-words">
                <span className="font-bold text-xs">LKR</span>
                {` ${product?.price} only`}
              </p>
            </div>
            <div className="flex flex-col w-1/3 border rounded-lg p-4">
              <div className="flex flex-row justify-between border-b-2 p-1">
                <h1 className="font-semibold">Ship To</h1>
                <span className="flex flex-row font-light">
                  <MapPin /> Sri Lanka
                </span>
              </div>
              <div className="flex flex-col p-1 mt-1 gap-1 border-b-2">
                <h1 className="font-semibold">Shipping: LKR 2455.24</h1>
                <h1 className="font-light">
                  Estimated Delivery On
                  <span className="font-bold">Dec 25</span>
                </h1>
              </div>
              <div className="flex flex-col p-1 mt-1 gap-1 border-b-2">
                <h1 className="font-semibold">Service</h1>
                <h1 className=" font-light">75-Day Buyer Protection</h1>
              </div>
              <div className="flex flex-col p-1 mt-1 gap-2 border-b-2">
                <h1 className="font-semibold">Quantity</h1>
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center w-7 h-7">
                    <button
                      className="border w-full h-full rounded-full text-gray-500 "
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                  </div>

                  <input
                    className="inline-block w-7 h-7 text-bold p-2 focus:outline-none text-center"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <div className="flex items-center justify-center w-7 h-7">
                    <button
                      className="border w-full h-full rounded-full text-gray-500 "
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-light">Additional 2% off(5pieces or more)</p>
              </div>
              <div className="flex flex-col">
                <div className="p-1 mt-2">
                  <h1 className="font-semibold">
                    {`Total: ${price}.00 `}
                    <span className="font-bold text-xs">LKR</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-4 p-4 w-full items-center">
                  <button className="flex bg-red-500 text-white font-semibold text-lg p-2 w-2/3 items-center justify-center rounded-full">
                    Buy Now
                  </button>
                  <button
                    className="flex bg-gray-300 text-red-500 font-semibold text-lg w-2/3 p-2 items-center justify-center rounded-full"
                    onClick={addCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <input
            type="number"
            onChange={getQuantity}
            className="bg-gray-500 text-white"
          /> */}
            {/* 

          <div
            className="flex mb-1 justify-between rounded-full border border-gray-600 content-around overflow-hidden m-1"
            style={{ height: "10%" }}
          >
            
          </div> */}
          </div>

          // </div>
        )
      )}
      <PosterSlider
        title="Flash Sale"
        subtitle="Take a Look at the Exclusive Flash Sale"
        posterData={products}
      />
    </>
  );
};

export default ProductId;
