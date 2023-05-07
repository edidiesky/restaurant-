import { menudata } from "@/data/menu";
import React from "react";
import styled from "styled-components";
import Card from "../common/Card";

export default function List() {
  return (
    <ListContent style={{ padding: "6rem 0" }}>
      <div className="w-85 auto wrapper">
        {menudata.map((x, index) => {
          return <Card x={x} index={index} />;
        })}
      </div>
    </ListContent>
  );
}

const ListContent = styled.div`
  width: 100%;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
    @media (max-width: 350px) {
      grid-template-columns: 1fr;
    }
  }
`;
