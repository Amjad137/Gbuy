import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  userCart: CartItem[];
  addToCartDB: (item: CartItem) => void;
  setCart: (cart: CartItem[]) => void;
  setUserCart: (cart: CartItem[]) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

const cartCollection = collection(db, "cartCollection");
export const useCartStore = createWithEqualityFn<CartStore>(
  (set) => ({
    cart: [],
    userCart: [],
    addToCartDB: (item) => {
      // Add the item to the local state
      set((state) => ({ cart: [...state.cart, item] }));

      // Update Firestore
      const cartDoc = doc(cartCollection);
      setDoc(cartDoc, item);
    },
    setCart: (cart) => set({ cart }),
    setUserCart: (userCart) => set({ userCart }),
    removeFromCart: (itemId) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== itemId),
      })),
    clearCart: () => set({ cart: [] }),
  }),
  shallow
);
const fetchCarts = async () => {
  const cartsCollection = collection(db, "cartCollection");

  try {
    const querySnapshot = await getDocs(cartsCollection);
    const cartsData = querySnapshot.docs.map((doc) => doc.data() as CartItem);

    useCartStore.getState().setCart(cartsData);
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
  }
};

fetchCarts();
