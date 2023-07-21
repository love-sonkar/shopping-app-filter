import React, { createContext, useContext, useEffect, useReducer } from "react";
import Reducers from "./Reducers";
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

  return (
    <ContextApi.Provider value={{ state, dispatch }}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiHook;

export const UseStoreApi = () => {
  return useContext(ContextApi);
};
