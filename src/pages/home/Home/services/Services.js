import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("sevices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className=" my-28">
        <div className="text-center my-20">
            <p className=" text-orange-800 font-bold">Service</p>
            <h2 className=" font-semibold text-4xl">Our Service Area</h2>
            <p className=" text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable. </p>
        </div>
      <div className=" gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
