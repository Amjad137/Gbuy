import { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "@/store/auth-store";
import { useCartStore } from "@/store/cart-store";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { CartItem } from "@/store/cart-store";
type Props = PropsWithChildren<{}>;

const CartProvider = (props: Props) => {
  const { user, loading, setLoading } = useAuthStore((s) => ({
    user: s.user,
    loading: s.loading,
    setLoading: s.setLoading,
  }));

  const { cart } = useCartStore((s) => ({
    cart: s.cart,
  }));

  useEffect(() => {
    const fetchCarts = async () => {
      const cartsCollection = collection(db, "cartCollection");

      try {
        const querySnapshot = await getDocs(cartsCollection);
        const cartsData = querySnapshot.docs.map(
          (doc) => doc.data() as CartItem
        );

        useCartStore.getState().setCart(cartsData);
      } catch (error) {
        console.error("Error fetching products from Firestore:", error);
      }
    };

    fetchCarts();
  }, [cart, user?.uid]);
  return <>{props.children}</>;
};

export default CartProvider;
