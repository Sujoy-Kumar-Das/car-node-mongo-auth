import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // console.log(service)
  const { img, price, title } = product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="flex text-yellow-300">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </p>
        <h2 className="card-title">{title}</h2>
        <p>Price : ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
