import Image from "next/image";
import React from "react";
import styled from "styled-components";
const News = () => {
  return (
    <NewsWrapper>
      <div className="wrapper w-100 h-100 flex column">
        <div className="w-100 top flex column item-center justify-center gap-1">
          <h3 className="fs-40 family2 text-center w-100 text-light text-white">
            <span
              className="fs-12 text-bold family3 text-center uppercase text_secondary block"
              style={{ letterSpacing: "5px" }}
            >
              BEST MENU
            </span>
            Special Dishes
          </h3>
          <span
            className="fs-10 text-light text-center family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px", paddingTop: "1rem" }}
          >
            BEST MENU
          </span>
        </div>
        <div className="w-100 bottom flex column relative gap-1">
          <div className="imagegradient w-100 h-100"></div>
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src={
              "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/featured-3.jpg"
            }
            className="image w-100 h-100"
          />
        </div>
      </div>
      <div className="wrapper w-100 h-100">
        <div
          style={{ position: "absolute", bottom: "10%", zIndex: "200" }}
          className="w-100 flex column item-center justify-center gap-1"
        >
          <h3 className="fs-40 family2 text-center w-100 text-light text-white">
            <span
              className="fs-12 text-bold family3 text-center uppercase text_secondary block"
              style={{ letterSpacing: "5px" }}
            >
              LATEST
            </span>
            Upcoming Events
            <span
              style={{ fontWeight: "300" }}
              className="fs-14 py-2 text-light block text-grey family1"
            >
              Simply dummy printing and setting.
            </span>
          </h3>
          <span
            className="fs-10 text-light text-center family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px", paddingTop: "1rem" }}
          >
            JOIN EVENT
          </span>
        </div>
        <div className="imagegradient w-100 h-100"></div>
        <Image
          alt=""
          width={0}
          sizes="100vw"
          height={0}
          loading="lazy"
          src={
            "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/featured-2.jpg"
          }
          className="image w-100 h-100"
        />
      </div>
      <div className="wrapper w-100 h-100 flex column">
        <div className="w-100 top flex column item-center justify-center gap-1">
          <h3 className="fs-40 family2 text-center w-100 text-light text-white">
            <span
              className="fs-12 text-bold family3 text-center uppercase text_secondary block"
              style={{ letterSpacing: "5px" }}
            >
              SELECTED
            </span>
            Chef Choice
          </h3>
          <span
            className="fs-10 text-light text-center family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px", paddingTop: "1rem" }}
          >
            BEST MENU
          </span>
        </div>
        <div className="w-100 bottom flex column relative gap-1">
          <div className="imagegradient w-100 h-100"></div>
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src={
              "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/featured-1.jpg"
            }
            className="image w-100 h-100"
          />
        </div>
      </div>
    </NewsWrapper>
  );
};
const NewsWrapper = styled.div`
  /* padding: 7rem 0; */
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media (max-width: 580px) {
    grid-template-columns: repeat(1,1fr);
  }
  .top {
    background-color: var(--dark-1);
  }
  .image {
    object-fit: cover;
  }
  .imagegradient {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .wrapper {
    min-height: 90vh;
    position: relative;
    @media (max-width: 580px) {
      min-height: 70vh;

  }
    .bottom,
    .top {
      height: 50%;
    }
  }
`;

export default News;
