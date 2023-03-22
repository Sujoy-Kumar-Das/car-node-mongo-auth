import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
// import ProductCard from "./ProductCard";


const Team = () => {
  const [members, Setmenbers] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => Setmenbers(data));
  }, []);
  return (
    <div className=" my-28">
        
        <div className="text-center my-20">
            <p className=" text-orange-800 font-bold">Team</p>
            <h2 className=" font-semibold text-4xl">Meet Our Team</h2>
            <p className=" text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</p>
        </div>
      <div className=" gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {members.map(member=> <TeamCard key={member.id} member={member}></TeamCard>)}
      </div>
    </div>
  );
};

export default Team;
