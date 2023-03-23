import React from "react";
import {   FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  // console.log(service)
  const { img,title,prof} = member;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{prof}</p>
    <div className="flex">
        <p className=" text-blue-700 mx-2 text-lg"><FaFacebook></FaFacebook></p>
        <p className=" text-blue-700 mx-2 text-lg"><FaTwitter></FaTwitter></p>
        <p className=" text-blue-700 mx-2 text-lg"><FaInstagram></FaInstagram></p>
        <p className=" text-blue-700 mx-2 text-lg"><FaLinkedin></FaLinkedin></p>
    </div>
  </div>
</div>
  );
};

export default TeamCard;
