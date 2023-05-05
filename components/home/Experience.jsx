import React from "react";
import styled from "styled-components";

export default function Experience() {
  return (
    <ExperienceContent className="flex w-100 column gap-4">
      <div className="w-100 exWrapper flex">
        <div className="flex-1 imageContent">
          <img
            src="https://avada.website/restaurant/wp-content/uploads/sites/112/2020/01/menu252x-1200x1375.jpg"
            className="w-100 h-100 imagewrapper"
            alt=""
          />
        </div>
        <div className="experienceRight flex item-center justify-center">
          <div className="flex experienceRightC column gap-4 auto">
            <h4 className="fs-18 family1 text-light uppercase text-white">
              FINE DINING EXPERIENCE
            </h4>
            <h1 className="family3 text-white">THE BEST TABLE IN TOWN</h1>
            <h4 className="fs-18 family2 text-light text-white">
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla.
            </h4>
            <div className="w-100 text-start">
              <button className="btn text-dark btn-2 family1 uppercase text-white text-light fs-16 py-2">
                Explore the Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </ExperienceContent>
  );
}

const ExperienceContent = styled.div`
  padding: 4rem 0;
  .exWrapper {
    .imageContent {
      min-height: 10rem;
      flex: 1;
    }
    .experienceRight {
      flex: 0.7;
      padding: 15rem 0;
      background-color: #000;
      .experienceRightC {
        width: 50%;
      }
    }
    @media (max-width: 980px) {
      flex-direction: column;
    }
  }
  .imagewrapper {
    min-height: 10rem;
  }

  .ExperienceBottom {
    display: grid;
    padding-top: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5rem;
  }
`;
