import React from "react";
import personImg from "../../../../assets/images/about_us/person.jpg";
import partsImg from "../../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero mt-10 w-full">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-full lg:w-1/2 relative">
          <img src={personImg} alt="" className="rounded-lg border-8 w-full lg:w-4/5"
          
           />
          <img
            src={partsImg}
            alt=""
            className="w-3/5 lg:w-3/5   absolute left-40 lg:left-44 top-32 lg:top-32 rounded-lg border-8"
            
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10">
          <p className="text-orange-600 font-bold"> About us</p>
          <h1 className=" text-2xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className=" py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-4">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          <button className="btn btn-error text-white font-normal">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
