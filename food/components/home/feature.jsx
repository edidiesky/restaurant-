import React from "react";
import styled from "styled-components";

const list1 = [
  {
    rating: 150,
    text: "DAILY  ORDER",
  },
  {
    rating: 50,
    text: "SPECIAL DISHES",
  },
  {
    rating: 40,
    text: "EXPERT CHEF",
  },
  {
    rating: 10,
    text: "AWARDS WON",
  },
];
const Feature = () => {
  return (
    <FeatureWrapper>
      <div className="image"></div>
      <div className="imagewrapper"></div>
      <div className=" wrapper flex gap-4 item-center column justify-center auto">
        <h2 className="text-white family2 w-100 text-center">
          <span
            className="fs-12 family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px" }}
          >
            AMAZING EXPERIENCE
            <div className="w-100 block">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/icons/separator.svg"
                alt=""
                style={{ width: "10rem", padding: "1.5rem 0" }}
              />
            </div>
          </span>
          Watch Our Video
        </h2>
        <div className="w-100 flex item-center justify-center">
          <div className="play"></div>
        </div>
        <h3 className="text-white text-center text-light family2">
          A modern restaurant with a menu that will make your mouth water.
          <span
            className="fs-12 family3 text-bold uppercase text_secondary block"
            style={{ letterSpacing: "5px", paddingTop: "3rem" }}
          >
            WILLIUM JOE - MASTER CHEF
          </span>
        </h3>
        <div className="w-100 flex item-center justify-center">
          <div
            className="svg w-100"
            style={{ height: "18px", position: "relative" }}
          >
            <img
              className="w-100 h-100"
              style={{ position: "absolute" }}
              src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/background/pattern-10.svg"
              alt=""
            />
          </div>
        </div>
        <div
          style={{ flexWrap: "wrap" }}
          className="w-100 flex item-center gap-1 justify-center"
        >
          {list1.map((x, index) => {
            return (
              <div className="flex-1">
                <h2 className="text-white family2 text-center">
                  {x.rating}+
                  <span
                    className="fs-12 family3 text-bold uppercase text_secondary"
                    style={{
                      letterSpacing: "5px",
                      padding: "0 ",
                      width: "10px",
                    }}
                  >
                    {x.text}
                  </span>
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </FeatureWrapper>
  );
};
const FeatureWrapper = styled.div`
  padding: 10rem 0;
  .wrapper {
    z-index: 300;
    padding: 10rem 0;
  }
  h3 {
    font-size: 50px;
    width: 70%;
    margin: 0 auto;
  }
  .play {
    height: 10rem;
    width: 10rem;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
  }

  .image {
    background-size: cover;
    background-image: url("https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/background/image-3.jpg");
    position: absolute;
    background-position: center;
    width: 100%;
    z-index: -1;
    height: 100%;
    background-attachment: fixed;
  }
  /* .imagewrapper {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 20;
    height: 100%;
    width: 100%;
  } */
  h2 {
    font-size: 6rem;
    font-weight: normal;
  }
`;

export default Feature;
