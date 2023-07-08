import React from "react";
import styled from "styled-components";
const Feature = () => {
  return (
    <FeatureWrapper>
      <div className="image"></div>
      <div className="w-90 auto">
        <h2 className="fs-30 text-white">
          <span
            className="fs-12 text-extra-bold family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px" }}
          >
            RECENT UPDATES
            <div className="w-100 block">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/icons/separator.svg"
                alt=""
                style={{ width: "10rem", padding: "1.5rem 0" }}
              />
            </div>
          </span>
          Upcoming Ev Feature Wrapper
        </h2>
      </div>
    </FeatureWrapper>
  );
};
const FeatureWrapper = styled.div`
  height: 100vh;
  .image {
    position: absolute;
    background-attachment: fixed;
    height: 100%;
    width: 100%;
    background: url("https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/background/image-3.jpg");
    object-fit: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

export default Feature;
