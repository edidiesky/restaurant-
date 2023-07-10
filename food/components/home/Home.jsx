import React from "react";
import styled from "styled-components";

import Special from "./special";
import Event from "./event";
import Feature from "./feature";
import Chef from "./chef";
import About from "./about";
import Service from "./service";
import Menu from "./menu";
// import Hero from "@/components/home/Hero";
import Testimonial from "./testimonial";
import Hero from "./hero";
import Specialities from "./specialities";
import Strength from "./strength";
import Header from "@/food/common/Header";
import News from "./news";
// import News from "@/components/home/News";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <Service />
      <About />
      <Special />
      <Menu />
      <Specialities />
      <Testimonial />
      {/* resre */}
      <Strength />
      <News />
      <Chef />
      <Feature />
      <Event />
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div``;

export default Home;
