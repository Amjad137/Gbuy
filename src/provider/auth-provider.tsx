"use client";
import { PropsWithChildren, useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useAuthStore } from "@/store/auth-store";

type Props = PropsWithChildren<{}>;

const AuthProvider = (props: Props) => {
  const { setUser, setLoading } = useAuthStore((s) => ({
    setUser: s.setUser,
    setLoading: s.setLoading,
  }));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  });

  return <>{props.children}</>;
};

export default AuthProvider;
