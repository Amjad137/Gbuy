"use client";

import { useAuthStore } from "@/store/auth-store";
import AddNew from "@/components/addnew-button";
import HeroCarousel from "../components/hero-carousel/index";
import ImageCard from "@/components/image-card";
import Cards from "@/components/Cards";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useProductsStore } from "@/store/collection-store";
import { productProps } from "@/store/collection-store";

export default function Home() {
  const { user, loading } = useAuthStore((s) => ({
    user: s.user,
    loading: s.loading,
  }));
  const [signedUser, setSignedUser] = useState<string | null>("");

  useEffect(() => {
    if (!loading) {
      if (user) {
        console.log(user.email);
        setSignedUser(user.email);
      }
    }
  }, [loading, user]);

  // const [productsData, setProductsData] = useState<productProps[]>([]);

  const { products, setProducts } = useProductsStore((s) => ({
    products: s.products,
    setProducts: s.setProducts,
  }));

  //firebase-hooks
  const [value, collectionLoading, error] = useCollection(
    collection(db, "productsData")
  );

  useEffect(() => {
    if (!collectionLoading && value) {
      const productsData = value.docs.map((doc) => doc.data() as productProps);
      setProducts(productsData);
      console.log(productsData);
    }
  }, [collectionLoading, value, setProducts]);

  return (
    <>
      <HeroCarousel />
      <ImageCard />

      <div className="flex w-full h-full flex-wrap items-center justify-center">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {collectionLoading && <span>Products: Loading...</span>}
        {products.map((product, index) => (
          <Cards
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className="flex fixed bottom-10 right-5">
        {user ? <AddNew /> : <></>}
      </div>
    </>
  );
}
