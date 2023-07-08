import React from "react";
import styled from "styled-components";
const Chefdata = [
  {
    text: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    header: "Willium Joe",
    date: "15/09/2022",
    image:
      "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/team-1.jpg",
  },
  {
    text: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    header: "Steave Den",
    image:
      "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/team-2.jpg",
    date: "15/05/2023",
  },
  {
    text: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    header: "Steave Den",
    image:
      "https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/resource/team-3.jpg",
    date: "15/05/2023",
  },
];
const Chef = () => {
  return (
    <ChefWrapper>
      <div className="w-90 flex column gap-3 auto">
        <h2 className=" text-white family2 w-100 text-center">
          <span
            className="fs-12 text-extra-bold family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px" }}
          >
            EXPERIENCED TEAM
            <div className="w-100 block">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/icons/separator.svg"
                alt=""
                style={{width:"10rem",padding:"1.5rem 0"}}
              />
            </div>
          </span>
          Upcoming Ev
          Meet Our Chef
        </h2>
        <div className="grid_wrapper w-90 auto">
          {Chefdata.map((x, index) => {
            return (
              <div key={index} className="w-100 card">
                <div className="wrapper">
                  <div className="imagewrapper w-100 h-100"></div>
                  <img src={x.image} alt="" className="image w-100 h-100" />
                </div>
                <div className="header flex column gap-1">
                  <h4
                    className=" fs-35 text-white text-light family2"
                    style={{ letterSpacing: "4px" }}
                  >
                    {x.header}
                  </h4>
                  <h3
                    className="text-white fs-12 text_secondary family3"
                    style={{ letterSpacing: "3px" }}
                  >
                    MASTER CHEF
                  </h3>
                  <h3 className="text-white family3 text-light fs-14 text-grey">
                    {x.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ChefWrapper>
  );
};
const ChefWrapper = styled.div`
  background: var(--background_2) !important;
  min-height: 100vh;
  padding: 6rem 0;
  .grid_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 6rem;
  }
  .btn {
    border: 2px solid var(--primary);
    padding: 1.7rem 4.5rem;
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: 400;
    color: var(--primary);
    text-transform: uppercase;
  }
  .card {
    overflow: hidden;
  }
  .wrapper {
    position: relative;
    min-height: 45rem;
    .image {
      position: absolute;
      object-fit: cover;
      transition: all 0.4s;
    }
  }
  .header {
    padding: 2rem 0;
  }
  h2 {
    font-size: 6rem;
    font-weight: normal;
  }
`;

export default Chef;
