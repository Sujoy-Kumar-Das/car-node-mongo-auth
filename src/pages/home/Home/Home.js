import React from "react";
import Banner from "../banner/Banner";
import About from "./About/About";
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
    </div>
  );
};

export default Home;
