"use client";
import Image from "next/image";
import { useAuthStore } from "@/store/auth-store";
import AddNew from "@/components/addnew-button";
import HeroCarousel from "@/components/hero-carousel";
import ImageLink from "@/components/image-link";
import Cards from "@/components/Cards";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useProductsStore } from "@/store/collection-store";
type productProps = {
  productData: {
    Name: string;
    Description: string;
    Price: number;
    ImageLink: string;
  };
};

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
      <ImageLink />

      <div className="flex w-full h-full flex-wrap items-center justify-center">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {collectionLoading && <span>Products: Loading...</span>}
        {products.map((product) => (
          <Cards
            key={product.productData.Name}
            Name={product.productData.Name}
            Description={product.productData.Description}
            Price={product.productData.Price}
            Image={product.productData.ImageLink}
          />
        ))}
      </div>
      <div className="flex fixed bottom-10 right-5">
        {user ? <AddNew /> : <></>}
      </div>
    </>
  );
}
