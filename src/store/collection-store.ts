import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type productProps = {
  productData: {
    Name: string;
    Description: string;
    Price: number;
    ImageLink: string;
  };
};

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
