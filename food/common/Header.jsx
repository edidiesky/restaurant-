import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "./button";
const list = ["Home", "Menus", "About Us", "Our Vendors", "Contact"];

const Header = () => {
  return (
    <HeaderWrapper className="w-100">
      <div className="w-90 auto flex item-center justify-space">
        <div className="flex-1">
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src={
              "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/logo.png"
            }
            className="image auto"
          />
        </div>
        <div className="w-100 flex item-center gap-2 justify-end">
          <div className="flex flex-1 center justify-center item-center gap-4 fs-12 text-bold uppercase text-white family3">
            {list.map((x, index) => {
              return (
                <div style={{ paddingRight: "1rem" }} key={index} className="">
                  {x}
                </div>
              );
            })}
          </div>
          <div className=" flex item-center justify-end">
            <Button type="button" text={"Find a table"} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  background-color: rgba(32, 32, 32, 0.583);
  z-index: 3000;
  /* filter: blur(10px); */
  backdrop-filter: blur(54px);

  .image {
    height: 40px;
    width: auto;
  }
  .center {
    @media (max-width:780px) {
      display: none;
    }
  }
`;

export default Header;
