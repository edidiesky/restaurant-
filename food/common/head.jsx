import React from "react";
import styled from "styled-components";

const Head = ({text,subtext}) => {
  return (
    <HeadWrapper className=" text-white family2 w-100 text-center">
      <span
        className="fs-12 text-extra-bold family3 uppercase text_secondary block"
        style={{ letterSpacing: "5px" }}
      >
        {subtext}
        <div className="w-100 block">
          <img
            src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/icons/separator.svg"
            alt=""
            style={{ width: "10rem", padding: "1.5rem 0" }}
          />
        </div>
      </span>
      {text}
    </HeadWrapper>
  );
};

const HeadWrapper = styled.h2`
  font-size: 6rem;
  font-weight: normal;
`;

export default Head;
