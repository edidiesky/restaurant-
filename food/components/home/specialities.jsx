import { fooddata } from "@/data/menudata";
import SliderIndex from "@/food/common/Slider";
import Head from "@/food/common/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const options2 = {
  items: 4,
  stagePadding: 10,
  nav: true,
  dots: false,
  margin: 20,
  navText: ["<", ">"],
  width: "100%",
  slideBy: 4,
  responsive: {
    0: {
      items: 2,
    },
    460: {
      items: 2,
    },
    760: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
};

const Specialities = () => {
  return (
    <SpecialitiesWrapper>
      <div className="w-90 auto flex column gap-4">
        <Head text={"Best Specialties"} subtext={"SPECIAL OFFER"} />
        <SliderIndex className="owl-theme" options={options2}>
          {fooddata.map((x, index) => {
            return (
              <div key={index} className="w-100 flex column gap-2">
                <div className="imagewrapper w-100">
                  <Image
                    alt=""
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src={x.image}
                    className="h-100 w-100 auto"
                  />
                </div>
                <div className="flex column gap-1 w-100">
                  <h3 className="fs-24 text-center text-light family2 text-white">
                    {x.title}
                  </h3>
                  <h4 className="fs-16 text-center text-light family2 text-grey">
                    {x.description}
                  </h4>
                  <h3 className="fs-24 text-center text-light family2 text_secondary">
                    ${x.price}
                  </h3>
                </div>
              </div>
            );
          })}
        </SliderIndex>
      </div>
    </SpecialitiesWrapper>
  );
};
const SpecialitiesWrapper = styled.div`
  padding: 7rem 0;
  position: relative;
  .imagewrapper {
    height: 35rem;
    position: relative;
  }
`;

export default Specialities;
