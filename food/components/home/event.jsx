import React from "react";
import styled from "styled-components";
const eventdata = [
  {
    text: "Flavour so good you’ll try to eat with your eyes.",
    header: "FOOD, FLAVOUR",
    date: "15/09/2022",
    image: "./images/event-1.jpg",
  },
  {
    text: "Flavour so good you’ll try to eat with your eyes.",
    header: "HEALTHY FOOD",
    image: "./images/event-2.jpg",
    date: "15/05/2023",
  },
  {
    text: "Flavour so good you’ll try to eat with your eyes.",
    header: "HEALTHY FOOD",
    image: "./images/event-3.jpg",
    date: "15/05/2023",
  },
];
const Event = () => {
  return (
    <EventWrapper>
      <div className="w-90 flex column gap-3 auto">
        <h2 className=" text-white family2 w-100 text-center">
          <span
            className="fs-12 text-extra-bold family3 uppercase text_secondary block"
            style={{ letterSpacing: "5px" }}
          >
            RECENT UPDATES
            <div className="w-100 block">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/delici/all-demo/Delici-Defoult/images/icons/separator.svg"
                alt=""
                style={{width:"10rem",padding:"1.5rem 0"}}
              />
            </div>
          </span>
          Upcoming Event
        </h2>
        <div className="grid_wrapper w-90 auto">
          {eventdata.map((x, index) => {
            return (
              <div key={index} className="w-100 card">
                <div className="wrapper">
                  <div className="imagewrapper w-100 h-100"></div>
                  <img src={x.image} alt="" className="image w-100 h-100" />
                  <div className="header">
                    <h4
                      className="text_secondary uppercase fs-12 family1"
                      style={{ letterSpacing: "4px" }}
                    >
                      {x.header}
                    </h4>
                    <h3 className="text-white family2">{x.text}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{ paddingTop: "5rem" }}
          className="w-100 flex item-center justify-center"
        >
          <div className="btn fs-16 family3">View our Blog</div>
        </div>
      </div>
    </EventWrapper>
  );
};
const EventWrapper = styled.div`
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
    &:hover {
      .image {
        transform: scale(1.1);
      }
    }
  }
  .wrapper {
    position: relative;
    min-height: 45rem;
    .image {
      position: absolute;
      object-fit: cover;
      transition: all 0.4s;
    }
    .imagewrapper {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 20;
    }
    .header {
      z-index: 300;
      position: absolute;
      bottom: 5%;
      left: 20%;
      transform: translateX(-20%);
      h3 {
        font-size: 27px;
        font-weight: 500;
      }
    }
  }
  h2 {
    font-size: 6rem;
    font-weight: normal;
  
  }
`;

export default Event;
