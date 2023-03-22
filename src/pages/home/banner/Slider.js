import React from "react";
import './Banner.css';
const Slider = ({ banner }) => {
  const { image, id, prev, next } = banner;
  return (
    <div
      id={`slide${id}`}
      className=" carousel-item relative w-full"
    >
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-2xl " />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mx-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-0 lg:left-20 top-1/4 text-4xl lg:text-6xl font-bold text-white p-10 w-full lg:w-1/2">
        <p>
          Affordable Price For Car Servicing
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 top-1/2 text-lg font-normal	 text-white w-full lg:w-1/2 left-0 lg:left-20 p-10">
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-0 lg:left-20 top-2/3 text-lg font-normal	 text-white w-1/2 p-10">
        <button className=" btn-active  btn btn-error " >Discover More</button>
        <button className="btn btn-error btn-outline  mx-10">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default Slider;
