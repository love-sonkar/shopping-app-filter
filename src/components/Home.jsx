import React from "react";
import { UseStoreApi } from "../hooks/ContextApiHook";
import Product from "./Product";
import Sidebar from "./Sidebar";

const Home = () => {
  const {
    state: { products },
  } = UseStoreApi();

  return (
    <div className="h-full flex ">
      <div className="flex-[0.3] hidden">
        <Sidebar />
      </div>
      <div className="flex flex-wrap gap-4 p-3 items-stretch justify-evenly">
        {products &&
          products?.map((item) => {
            return <Product key={item.id} product={item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
