import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


import { BiChevronRight, BiChevronLeft } from "react-icons/bi";


export default function SliderIndex({ children, options }) {
  return (
    <OwlCarousel
      className="owl-carousel owl-theme"
      {...options}
    >
      {children}
    </OwlCarousel>
  );
}
