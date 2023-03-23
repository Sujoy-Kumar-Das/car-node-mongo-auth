import React from "react";
import Banner from "../banner/Banner";
import About from "./About/About";
import Facilities from "./facilities/Facilities";
import Products from "./products/Products";
import Services from "./services/Services";
import Team from "./team/Team";


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Products></Products>
        <Team></Team>
        <Facilities></Facilities>
    </div>
  );
};

export default Home;
