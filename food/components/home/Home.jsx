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

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Service />
      <About />
      <Special />
      <Menu />
      <Specialities/>
      <Testimonial />
      <Chef />
      <Feature />
      <Event />
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div``;

export default Home;
