import React from "react";
import {  FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service)
  const { _id,img, price, title } = service;
  return (
    <div className="card w-80  glass border-4 hover:shadow-2xl">
      <figure>
        <img
          src={img}
          alt={`this is ${title} pic`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
            <p>Price : ${price}</p>
            <Link to={`/checkout/${_id}`}><p className=" text-2xl hover:text-3xl hover:text-blue-700 ease-in-out duration-300"> <FaArrowAltCircleRight></FaArrowAltCircleRight> </p></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
