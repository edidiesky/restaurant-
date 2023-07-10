import React from "react";
import styled from "styled-components";

const Button = ({ text, subtext, type }) => {
  return (
    <ButtonWrapper
      className={type === "button" ? "fs-16 family3 active" : "fs-16 family3"}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: 2px solid var(--primary);
  padding: 1.9rem 4.5rem;
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 400;
  color: var(--primary);
  text-transform: uppercase;
  &.active {
    background-color: var(--primary);
    color: #222;
    font-weight: 600;
  }
`;

export default Button;
