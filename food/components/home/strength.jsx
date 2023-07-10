import { strengthdata } from "@/data/strengthdata";
import Head from "@/food/common/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const Strength = () => {
  return (
    <StrenghtWrapper className="flex item-center justify-center">
      <div className="w-90 auto flex column gap-4">
        <Head text={"Our Strength"} subtext={"WHY CHOOSE US"} />
        <div className="grid_wrapper w-90 auto">
          {strengthdata.map((x, index) => {
            return (
              <div
                key={index}
                className="card flex item-center justify-center flex column gap-2"
              >
                <div className="w-100 item-center justify-center flex ">
                  <Image
                    alt=""
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src={x.image}
                    className="image auto"
                  />
                </div>
                <h3 className=" text-light text-white family2">
                  {x.head}
                </h3>
                <h4 className="fs-16 text-center text-light text-grey family2">
                  {x.description}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </StrenghtWrapper>
  );
};
const StrenghtWrapper = styled.div`
  padding: 7rem 0;
  background-color: #171819;
  position: relative;
  /* @media (min-width:1080px) {
    min-height: 100vh;
  } */
  .image {
    height: 80px;
    width: auto;
  }
  h3 {
    font-size: 26px;
  }
  .grid_wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }
    .card {
      padding: 4rem 2rem;
      background-color: #151616;
      border-radius: 5px;
      &:nth-of-type(even) {
        background-color: #121111;
      }
    }
  }
`;

export default Strength;
