// import Head from "next/head";
import { menudata } from "@/data/menudata";
import Button from "@/food/common/button";
import Head from "@/food/common/head";
import React from "react";
import styled from "styled-components";

const tabList = ["Morning", "WEEKDAY LUNCH", "Dinner", "Wines"];
const Menu = () => {
  return (
    <MenuWrapper>
      <div className="w-100 auto flex column gap-2">
        <Head text={"Delicious Menu"} subtext={"SPECIAL SELECTION"} />
        <div className="w-85 auto">
          <div className="tab flex item-center justify-center gap-4">
            {tabList.map((x, index) => {
              return (
                <h4
                  key={index}
                  className="family2 tabtext text-light uppercase fs-20 text-white"
                >
                  {x}
                </h4>
              );
            })}
          </div>
        </div>
        <div className="w-85 auto flex column gap-4">
          <div className="menu_wrapper w-100 py-2">
            {menudata.map((x, index) => {
              return (
                <div className="flex gap-2 item-center w-100">
                  <div className="imagewrapper">
                    <img src={x.image} alt="" />
                    {/* <div className="gradient"></div> */}
                  </div>
                  <div className="flex-1 flex column gap-1">
                    <h4 className="family2 flex item-center justify-space relative fs-24 text-white text-light">
                      {x.title}

                      <span className="text_secondary price_span text-light">
                        ${x.price}
                      </span>
                    </h4>
                    <h5 className="text-grey family2 text-light fs-16">
                      {x.description}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 column item-center justify-center ">
            <h5 className="fs-16 text-bold text-white family3">
              During winter daily from{" "}
              <span className="text_secondary">7.00am</span> to{" "}
              <span className="text_secondary">9:00 pm</span>
            </h5>
            <Button text={'view all menu'}/>
          </div>
        </div>
      </div>
    </MenuWrapper>
  );
};
const MenuWrapper = styled.div`
  background-color: #171819;
  padding: 8rem 0;
  .tab {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem 0;
    .tabtext {
      padding: 0 2rem;
    }
  }
  .imagewrapper {
    img {
      transition: all 0.5s;
    }
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .price_span {
    position: relative;
    flex: 1;
    text-align: end;
    &::after {
      position: absolute;
      content: "";
      width: 80%;
      left: 3%;
      top: 30%;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
    }
    &::before {
      position: absolute;
      content: "";
      width: 80%;
      left: 3%;
      top: 50%;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
    }
  }
  .menu_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    grid-column-gap: 10rem;
  }
`;

export default Menu;
