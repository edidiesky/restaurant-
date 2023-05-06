import React from "react";
import styled from "styled-components";

export default function Banner() {
  return (
    <BannerContent>
      <div className="w-85 bannerHeader auto flex column gap-2">
        <h4 className="fs-24 text-light uppercase text-white family3">
          BEST TABLE IN TOWN
        </h4>
        <h1 className="family3 text-light uppercase text-white">
          Our Takeout Menu
        </h1>
      </div>
      <div className="gradient2"></div>
      <img
        src="	https://avada.website/restaurant/wp-content/uploads/sites/112/2020/04/slider72x-scaled.jpg"
        alt=""
        className="imagewrapper"
      />
    </BannerContent>
  );
}

const BannerContent = styled.div`
  position: relative;
  min-height: 40rem;
  display: flex;
  align-items: center;
  .bannerHeader {
    z-index: 3000;
  }
  .imagewrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
