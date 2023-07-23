import React from "react";
import { UseStoreApi } from "../hooks/ContextApiHook";
import Product from "./Product";

const Home = () => {
  const {
    state: { products },
    filterstate: { fastdelivery, sort, rating, searchquery },
  } = UseStoreApi();

  const Price = () => {
    let FilteringProducts = products;
    if (fastdelivery) {
      FilteringProducts = FilteringProducts.filter((prod) => prod.fastdelivery);
    }
    if (sort) {
      FilteringProducts = FilteringProducts.sort((a, b) =>
        sort === "High_to_low" ? b.price - a.price : a.price - b.price
      );
    }
    if (rating) {
      FilteringProducts = FilteringProducts.filter(
        (prod) => prod.rating == rating
      );
    }
    if (searchquery !== "") {
      FilteringProducts = FilteringProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchquery)
      );
    }
    return FilteringProducts;
  };

  return (
    <div className="h-full flex ">
      <div className="flex flex-wrap gap-4 p-3 items-stretch justify-evenly">
        {Price().length === 0 ? (
          <h2 className="text-2xl">No Products Found</h2>
        ) : (
          Price()?.map((item) => {
            return <Product key={item.id} product={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
