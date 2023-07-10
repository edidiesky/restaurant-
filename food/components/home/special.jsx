import Button from "@/food/common/button";
import React from "react";
import styled from "styled-components";
const Special = () => {
  return (
    <SpecialWrapper>
      <div
        className="w-100 flex item-center gap-4"
        style={{ gap: "10rem", minHeight: "100vh" }}
      >
        <div className="flex-1 h-100">
          <img
            src="./images/special-dish-banner.jpg"
            alt=""
            className="w-100 h-100"
          />
        </div>
        <div className="flex-1 flex item-center justify-center h-100">
          <div className="flex column gap-2 w-100 h-100">
            <h2 className="text-start family2 text-white">
              <span
                className="fs-12 text-extra-bold family3 uppercase text_secondary block"
                style={{ letterSpacing: "5px" }}
              >
                SPECIAL DISH
                <div className="w-100 block">
                  <img
                    src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/icons/separator.svg"
                    alt=""
                    style={{ width: "10rem", padding: "1.5rem 0" }}
                  />
                </div>
              </span>
              Lobster Tortellini
              <span
                style={{ width: "80%", lineHeight: "2", paddingTop: "1.5rem" }}
                className="family3 fs-16 text-bold block text-white"
              >
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </span>
            </h2>
            <h4 className="text_secondary fs-30 text-light">$20.00</h4>
            <div className="w-100 py-2 flex item-center">
              <Button text={"View all Menu"} />
            </div>
          </div>
        </div>
      </div>
    </SpecialWrapper>
  );
};
const SpecialWrapper = styled.div`
  h2 {
    font-size: 5rem;
    font-weight: normal;
  }
`;

export default Special;
