import { servicedata } from "@/data/servicedata";
import Head from "@/food/common/head";
import React from "react";
import styled from "styled-components";
const Service = () => {
  return (
    <ServiceWrapper>
      <div className="w-90 auto flex column gap-2">
        <Head text={"We Offer Top Notch"} subtext={"FLAVORS FOR ROYALTY"} />
        <h4
          style={{ width: "35%", margin: "0 auto", lineHeight: "2" }}
          className="fs-14 family3 text-white text-center w-100 py-2 text-center text-bold"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever.
        </h4>
        <div
          style={{ marginTop: "2rem", position: "relative" }}
          className="w-90 auto grid_wrapper"
        >
          <div className="w-100 card1 flex column gap-4">
            <div className="imagewrapper w-100">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/background/pattern-8.svg"
                alt=""
                className="image_svg"
              />
              <img
                src={servicedata[0].image}
                alt=""
                className="image w-100 h-100"
              />
            </div>
            <h3 className="family2 fs-35 text-white text-center w-100 py-2 text-light">
              {servicedata[0].header}
              <span
                className="block family3 fs-12 text-bold uppercase text_secondary"
                style={{ marginTop: "2rem",letterSpacing: "3px" }}
              >
                View Menu
              </span>
            </h3>
          </div>
          <div className="w-100 card2 flex column gap-4">
            <div className="imagewrapper w-100">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/background/pattern-8.svg"
                alt=""
                className="image_svg"
              />
              <img
                src={servicedata[1].image}
                alt=""
                className="w-100 h-100 image"
              />
            </div>
            <h3 className="family2 fs-35 text-white text-center w-100 py-2 text-light">
              {servicedata[1].header}
              <span
                className="block family3 fs-12 text-bold uppercase text_secondary"
                style={{ marginTop: "2rem",letterSpacing: "3px" }}
              >
                View Menu
              </span>
            </h3>
          </div>
          <div className="w-100 card3 flex column gap-4">
            <div className="imagewrapper w-100">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/background/pattern-8.svg"
                alt=""
                className="image_svg"
              />
              <img
                src={servicedata[2].image}
                alt=""
                className="w-100 h-100 image"
              />
            </div>
            <h3 className="family2 fs-35 text-white text-center w-100 py-2 text-light">
              {servicedata[2].header}
              <span
                className="block family3 fs-12 text-bold uppercase text_secondary"
                style={{ marginTop: "2rem",letterSpacing: "3px" }}
              >
                View Menu
              </span>
            </h3>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};
const ServiceWrapper = styled.div`
  padding: 6rem 0;
  min-height: 100vh;
  .w-90 {
    /* width: 89%; */
  }
  .image {
    z-index: 300;
    position: relative;
  }
  .image_svg {
    width: 200px;
    position: absolute;
    z-index: 20;
    height: 120%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .card1,
  .card3 {
    transform: translateY(-30%);
    @media (max-width: 780px) {
      transform: translateY(0%);
    }
  }
  .card2 {
    transform: translateY(10%);
    @media (max-width: 780px) {
      transform: translateY(0%);
    }
  }
  .grid_wrapper {
    grid-gap: 14rem;
    @media (max-width: 780px) {
      transform: translateY(0%);
      grid-gap: 8rem;
    }
  }
  .imagewrapper {
    position: relative;
  }
`;

export default Service;
