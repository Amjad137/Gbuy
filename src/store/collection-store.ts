import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

export interface productProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

type ProductsStore = {
  products: productProps[];
  setProducts: (products: productProps[]) => void;
};

export const useProductsStore = createWithEqualityFn<ProductsStore>(
  (set) => ({
    products: [],
    setProducts: (products) => set({ products }),
  }),
  shallow
);
