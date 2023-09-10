import { useEffect } from "react";
import { productProps } from "@/store/collection-store";
import Cards from "../cards";
import { useProductsStore } from "@/store/collection-store";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import PosterSlider from "../poster-slider";

const FlashSale = () => {
  const { products, setProducts } = useProductsStore((s) => ({
    products: s.products,
    setProducts: s.setProducts,
  }));

  const [value, collectionLoading, error] = useCollection(
    query(collection(db, "productsData"))
  );

  useEffect(() => {
    if (!collectionLoading && value) {
      const productsData = value.docs.map((each) => ({
        id: each.id,
        name: each.data().name,
        price: each.data().price,
        description: each.data().description,
        image: each.data().image,
      }));
      setProducts(productsData);
    }
  }, [collectionLoading, value, setProducts]);

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {collectionLoading ? (
        <span>Products: Loading...</span>
      ) : (
        <PosterSlider
          title="Flash Sale"
          subtitle="Take a Look at the Exclusive Flash Sale"
          posterData={products}
        />
      )}
    </>
  );
};

export default FlashSale;
