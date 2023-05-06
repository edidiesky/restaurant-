import { menudata } from "@/data/menu";
import React from "react";
import styled from "styled-components";
import Card from "../common/Card";

export default function List() {
  return (
    <ListContent>
      {menudata.map((x, index) => {
        return <Card x={x} index={index} />;
      })}
    </ListContent>
  );
}

const ListContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 3rem;
`;
