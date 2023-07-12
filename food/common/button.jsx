import React from "react";
import styled from "styled-components";

const Button = ({ text, subtext, type }) => {
  return (
    <ButtonWrapper
      className={type === "button" ? "fs-16 family3 active" : "fs-16 family3"}
    >
      <span className="text-1 text">{text}</span>
      <span className="text-2 text">{text}</span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: 2px solid var(--primary);
  padding: 1.9rem 4.5rem;
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
    transition: all 0.4s;
  overflow: hidden;
  position: relative;
  &:is(:hover, :focus-visible)::before {
    bottom: -50%;
  }
  &:is(:hover, :focus-visible) .text-2 {
    transform: translate(-50%, -220%);
  }
  &:is(:hover, :focus-visible) .text-1 {
    transform: translateY(-100%);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background-color: var(--primary);
    transition: all 0.4s;
    z-index: -1;
  }
  .text {
    transition: all 0.4s;
  }
  .text-2 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    min-width: max-content;
    color: #000;
  }
  &.active {
    background-color: var(--primary);
    color: #222;
    font-weight: 600;
    &:is(:hover, :focus-visible)::before {
    bottom: -50%;
  }
  /* &:is(:hover, :focus-visible) {
    background-color: transparent;
  } */
  &:is(:hover, :focus-visible) .text-2 {
    transform: translate(-50%, -220%);
    z-index: 10;
    color: #fff;
  }
  &:is(:hover, :focus-visible) .text-1 {
    transform: translateY(-100%);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background-color: #000;
    transition: all 0.4s;
    z-index: 5;
  }
  }
`;

export default Button;
