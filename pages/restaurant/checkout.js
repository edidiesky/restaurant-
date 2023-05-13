import Head from "next/head";
import { Inter } from "next/font/google";
import Homeindex from "@/components/home/Home";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import Menu from "@/components/our-takeout-menu/our-takeout-menu";
import { Billingindex, Links, PaymentIndex } from "@/components/checkout";
import Banner from "@/components/common/Banner";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Root() {
  const [index, setIndex] = useState(1);
  return (
    <>
      <Head>
        <title>Checkout - Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner type={"type"} text={'Checkout'} />
      <BillingContainer>
        <div className="BillingWrapperTop">
          <p className="fs-20 family2">Hello</p>
          <p className="fs-20 family2">
            Need Assistance? Call customer service at 888-555-5555.
          </p>
          <p className="fs-20 family2">E-mail them at info@yourshop.com</p>
        </div>
        <div className="BillingWrapperCenter">
          <Links index={index} setIndex={setIndex} />
          {index === 0 && <Billingindex />}
          {index === 1 && <PaymentIndex />}
        </div>
      </BillingContainer>

    </>
  );
}

const BillingContainer = styled.div`
  width: 100%;
  .BillingWrapperTop {
    width: 90%;
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    background: var(--white);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    @media (max-width: 780px) {
      flex-direction: column;
    }
    p {
      padding: 2.5rem;
      border-right: 1px solid rgba(0, 0, 0, 0.08);
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      @media (max-width: 780px) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        border-right: none;
        width: 100%;
      }
    }
  }
  .BillingWrapperCenter {
    width: 95%;
    display: grid;
    grid-template-columns: 14vw 1fr;
    margin: 0 auto;
    padding: 2rem 0;
    grid-gap: 3rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;
