import Head from "@/food/common/head";
import React from "react";
import styled from "styled-components";
const Specialities = () => {
  return (
    <SpecialitiesWrapper>
      <div className="w-90 auto">
      <Head text={"Best Specialties"} subtext={"SPECIAL OFFER"} />
      </div>
    </SpecialitiesWrapper>
  );
};
const SpecialitiesWrapper = styled.div`
  padding: 7rem 0;
  position: relative;
`;

export default Specialities;
