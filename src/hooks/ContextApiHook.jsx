import React, { createContext, useContext, useReducer } from "react";
import { Reducers, FilterReducer } from "./Reducers";
import { faker } from "@faker-js/faker";

const ContextApi = createContext();

const ContextApiHook = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    des: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    rating: faker.number.int(5),
    image: faker.image.urlLoremFlickr({ category: "food" }),
    fastdelivery: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(Reducers, {
    cart: [],
    products: products,
  });

  const [filterstate, filterdispatch] = useReducer(FilterReducer, {
    fastdelivery: false,
    rating: 0,
    searchquery: "",
  });

  return (
    <ContextApi.Provider
      value={{ state, dispatch, filterstate, filterdispatch }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiHook;

export const UseStoreApi = () => {
  return useContext(ContextApi);
};
