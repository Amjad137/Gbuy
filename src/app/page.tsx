"use client";

import { useAuthStore } from "@/store/auth-store";
import AddNew from "@/components/addnew-button";
import HeroCarousel from "../components/hero-carousel/index";
import ImageCard from "@/components/image-card";
import FlashSale from "@/components/flash-sale";
import { useEffect, useState } from "react";

export default function Home() {
  const { user, loading } = useAuthStore((s) => ({
    user: s.user,
    loading: s.loading,
  }));
  const [signedUser, setSignedUser] = useState<string | null>("");

  useEffect(() => {
    if (!loading) {
      if (user) {
        setSignedUser(user.email);
      }
    }
  }, [loading, user]);

  return (
    <>
      <HeroCarousel />
      <ImageCard />

      <div className="container mx-auto px-4 md:px-12 my-8 w-full shadow-md">
        <FlashSale />
      </div>

      <div className="flex fixed bottom-10 right-5">
        {user ? <AddNew /> : <></>}
      </div>
    </>
  );
}
