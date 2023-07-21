import React from "react";
import {
  RatingComponent,
  SpanFastDelivery,
  ConcatinationString,
  Button,
} from "./utilit";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg w-72 justify-between overflow-hidden ">
      <img
        src={product?.image}
        alt="image"
        className="aspect-video object-cover w-full cursor-pointer hover:scale-110 transition-transform"
      />

      <div className="px-2 py-4">
        <div className="flex justify-between">
          <h2 className="text-2xl">{product?.name}</h2>
          <h2 className="text-xl text-yellow-600">Rs {product?.price} </h2>
        </div>
        <RatingComponent rating={product?.rating} />
        <SpanFastDelivery fastdelivery={product?.fastdelivery} />
        <p className="break-words">{ConcatinationString(product?.des, 100)}</p>
      </div>
      <div className="p-3">
        <Button title="Buy" />
      </div>
    </div>
  );
};

export default Product;
