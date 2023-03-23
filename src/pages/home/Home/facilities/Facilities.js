import React, { useEffect, useState } from "react";
import FacilitiesCard from "./FacilitiesCard";


const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetch("facilities.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);
  return (
    <div className=" my-28">
        <div className="text-center my-20">
            <p className=" text-orange-800 font-bold">Core Features</p>
            <h2 className=" font-semibold text-4xl my-4">Why Choose Us</h2>
            <p className=" text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable. </p>
        </div>
      <div className=" gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-4/5 lg:w-full mx-auto">
        {facilities.map(facilitie => <FacilitiesCard key={facilitie.id} facilitie={facilitie}></FacilitiesCard>)}
      </div>
    </div>
  );
};

export default Facilities;
