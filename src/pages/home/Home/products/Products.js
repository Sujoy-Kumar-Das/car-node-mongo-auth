import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=" my-28">
        
        <div className="text-center my-20">
            <p className=" text-orange-800 font-bold">Products</p>
            <h2 className=" font-semibold text-4xl my-4">Browse Our Products</h2>
            <p className=" text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
        </div>
      <div className=" gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 lg:w-full mx-auto">
        {products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </div>
  );
};

export default Products;
