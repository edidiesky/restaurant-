import Card from "@/components/cart/Card";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function CartSummary() {
  const { bag } = useSelector((store) => store.bag);

  return (
    <CartContentContainer>
      <div>
        <div>
          <div className="w-100 tableTop flex item-center justify-space">
            <h4
              style={{ fontWeight: "normal" }}
              className="price fs-20 family3 text-dark"
            >
              Product
            </h4>
            <h4 style={{ fontWeight: "normal" }} className="sub fs-20 family3">
              SubTotal
            </h4>
          </div>
        </div>
        <div className="w-100 py-2 flex column gap-2">
          {bag.slice(0, 1)?.map((x) => {
            return <Card key={x.id} x={x} type={"payment"} />;
          })}
        </div>
      </div>
    </CartContentContainer>
  );
}
const CartContentContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .tableTop {
    padding-bottom: 2rem;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    .sub {
      text-align: flex-end;
    }
  }

  .cartProduct {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: center;
    @media (max-width: 780px) {
      font-size: 2.4rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .imageWrapper {
      img {
        width: 15rem;
        position: relative;
        height: 15rem;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }
  .card {
    padding: 2rem 0;
  }
  .title {
    color: var(--dark-1);
    @media (max-width: 780px) {
      font-size: 2.4rem;
    }
  }

  h4 {
    text-align: center;
    padding: 2rem 0;
    color: var(--dark-1);
    @media (max-width: 780px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 3rem;
    color: var(--text-color);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 2rem 0;
    text-transform: uppercase;
  }
`;
