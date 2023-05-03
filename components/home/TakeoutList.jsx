import React from "react";
import styled from "styled-components";
import { planData } from "../../data/Plan";
export default function Plans() {
  return (
    <PlansContent>
      <div className="w-90 auto container">
        <div className="w-100 grid2">
          {planData.map((x, index) => {
            return (
              <div
                className={
                  index === 1
                    ? "Card w-100 column gap-3 item-center flex back-white active"
                    : "Card w-100 column gap-3 item-center flex back-white"
                }
                key={index}
              >
                <h2
                  className={
                    index === 1
                      ? "top w-85 auto text-start py-3 px-3 fs-16 family3 uppercase active"
                      : "top w-85 auto text-start py-3 px-3 fs-16 family3 uppercase"
                  }
                >
                  {x.title}
                </h2>

                <ul className="w-100 flex column gap-1 py-3">
                  {x.list.map((x, index) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="w-100 hidden">
                        <li className="w-85 auto flex column gap-2 fs-14 text-light center border-bottom py-1 auto">
                          <div className="flex w-100 item-center gap-2 justify-space">
                            <h3 className="family3 text-light fs-30 text-dark">
                              {x.title}
                            </h3>
                            <h3 className="family3 text-light fs-20 text-dark">
                              ${x.price}
                            </h3>
                          </div>
                          <h4 className="family2 fs-20 text-light">{x.desc}</h4>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </PlansContent>
  );
}

const PlansContent = styled.div`
  width: 100%;
  .btn2 {
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--green);
    background-color: transparent;
    padding: 1.4rem 2rem;
    margin-bottom: 2rem;
    &:hover {
      color: #fff;
    }
  }
  .top {
    color: #fff;
    &.active {
      background-color: var(--blue-2);
    }
  }
  .Card {
    background-color: #e8e8e8;
    width: 100%;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 10rem 0;
    gap: 5rem;
    &.active {
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
      transform: translateY(-10px) scale(1.1);
      background-color: #000;
      h2 {
        font-size: 4.5rem;
        font-weight: normal;
        color: #fff;
      }
    }
    h2 {
      font-size: 4.5rem;
      font-weight: normal;
      color: #000;
    }
  }
  .grid2 {
    display: grid;
    width: 100%;
    padding: 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 0.09rem;
    grid-row-gap: 10rem;
    place-items: start;
  }
  .container {
    padding: 8rem 0;
  }
`;
