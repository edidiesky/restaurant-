import React from "react";
import styled from "styled-components";
import { FaCar } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "The best table in town",
    desc: "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
  {
    id: 2,
    title: "Perfect For Groups",
    desc: "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
  {
    id: 3,
    title: "Fresh produce everyday",
    desc: "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
];

export default function About() {
  return (
    <AboutContent className="flex column gap-4">
      <div className="w-90 auto flex gap-2">
        <div className="flex-1 flex column gap-2 column">
          <h4 className="fs-18 family2 text-light">
            HAC TELLUS, FELIS RISUS AT mattis mattis. Eget euismod semper eget
            tortor, donec amet, blandit. Tristique facilisi faucibus elementum
            feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet
            vulputate.
          </h4>
          <h1 className="family3">
            food is our common ground, a universal experience.
          </h1>
          <h4 className="fs-18 family2 text-light">
            HAC TELLUS, FELIS RISUS AT mattis mattis. Eget euismod semper eget
            tortor, donec amet, blandit. Tristique facilisi faucibus elementum
            feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet
            vulputate.
          </h4>

          <div className="w-100 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element,
          @next/next/no-img-element */}
            <img
              src="https://avada.website/restaurant/wp-content/uploads/sites/112/2019/12/signature.jpg"
              alt=""
              className=""
              style={{ width: "20rem" }}
            />
          </div>
        </div>
        <span className="flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element,
          @next/next/no-img-element */}
          <img
            src="https://avada.website/restaurant/menu/california-rolls-2/"
            alt=""
            className="w-100"
          />
        </span>
      </div>
      <div className="w-90 auto aboutBottom grid gap-2">
        {data.map((x, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="w-100 hidden" key={index}>
              <header
                key={x.id}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={index * 300}
                className="flex column gap-2"
              >
                <h3 className="family3 text-center fs-40 text-light">
                  {x.title}
                </h3>
                <h4 className="family2 text-center fs-18 text-light">
                  {x.desc}
                </h4>
                <div className="w-100 text-center">
                  <button className="btn text-dark family1 text-light fs-18 py-2">
                    Explore the Menu
                  </button>
                </div>
              </header>
            </div>
          );
        })}
      </div>
    </AboutContent>
  );
}

const AboutContent = styled.div`
  padding: 4rem 0;
  .aboutBottom {
    display: grid;
    padding-top: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5rem;
  }
`;
