import Button from "@/food/common/button";
import Image from "next/image";
import Head from "@/food/common/head";
import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <AboutWrapper>
      <div className="w-90 auto">
        <div className="grid_wrapper w-90 auto">
          <div className="flex column gap-2">
            <Head text={"Every Flavor Tells a Story"} subtext={"OUR STORY"} />
            <h4
              className="fs-14 family3 text-white text-center"
              style={{ lineHeight: "2.4" }}
            >
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries, but also the leap into.
            </h4>
            <div className="flex column item-center justify-center gap-2">
              <span className="span block fs-30 family2 text_secondary">
                <span className="block text-white text-center fs-16 text-bold family3">
                  Book Through Call
                </span>
                +80 (400) 123 4567
              </span>
              <Button text={"Read More"} />
            </div>
          </div>
          <div className="w-85 auto relative imagewrapper">
            <Image
              alt=""
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src={
                "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/image-1.jpg"
              }
              className="image auto"
            />
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
const AboutWrapper = styled.div`
  padding: 15rem 0;
  background-color: #171819;
  @media (max-width: 780px) {
    padding: 5rem 0;
  }
  .imagewrapper {
    position: relative;
    min-height: 30rem;
    .image {
      width: 100%;
      min-height: 100%;
    }
  }

  .grid_wrapper {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 10rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default About;
