import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function TakeoutMenu() {
  return (
    <TakeoutMenuContent className="flex w-100 column gap-4">
      <div className="w-100 exWrapper flex">
        <div className="flex-1 imageContent">
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://avada.website/restaurant/wp-content/uploads/sites/112/2020/01/menu252x-1200x1375.jpg"
            className="w-100 h-100 imagewrapper"
          />
        </div>
        <div className="TakeoutMenuRight flex item-center justify-center">
          <div className="flex TakeoutMenuRightC column gap-4 auto">
            <h4 className="fs-18 family1 uppercase text-light text-white">
              ENJOY YOUR MEAL AT HOME
            </h4>
            <h1 className="family3 text-white">TAKEOUT NOW AVAILABLE</h1>
            <h4 className="fs-20 family2 text-light text-white">
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla.
            </h4>
            <div className="w-100 text-start">
              <button className="btn text-dark btn-2 family1 uppercase text-white text-light fs-16 py-2">
                View takeout Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </TakeoutMenuContent>
  );
}

const TakeoutMenuContent = styled.div`
  padding: 4rem 0;
  .exWrapper {
    .imageContent {
      min-height: 15rem;
      flex: 1;
      img {
        height: 100%;
      }
      @media (max-width: 980px) {
        height: 30rem;
      }
    }
    .TakeoutMenuRight {
      flex: 0.8;
      padding: 15rem 0;
      background-color: #000;
      .TakeoutMenuRightC {
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

  .TakeoutMenuBottom {
    display: grid;
    padding-top: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5rem;
  }
`;
