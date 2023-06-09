import Head from "@/food/common/head";
import React from "react";
import styled from "styled-components";
const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <div className="w-90 auto">
      <Head text={"Best Specialties"} subtext={"SPECIAL OFFER"} />
      </div>
    </TestimonialWrapper>
  );
};
const TestimonialWrapper = styled.div`
  padding: 7rem 0;
  position: relative;
`;

export default Testimonial;
