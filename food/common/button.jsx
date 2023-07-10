import React from "react";
import styled from "styled-components";

const Button = ({ text, subtext }) => {
  return <ButtonWrapper className="fs-16 family3">{text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  border: 2px solid var(--primary);
  padding: 1.9rem 4.5rem;
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 400;
  color: var(--primary);
  text-transform: uppercase;
`;

export default Button;
