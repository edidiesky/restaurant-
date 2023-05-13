import React, { useState } from "react";
import styled from "styled-components";
import { savePaymentType } from "../../../Features";
import { useDispatch, useSelector } from "react-redux";
// import PapmentButton from "../paypal";
import CartSummary from "./summary";

export default function PaymentIndex() {
  const {
    bag,
    totalPrice,
    totalQuantity,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);
  return (
    <PaymentIndexContainer>
      <h2 style={{ fontWeight: "normal" }} className="family3">
        Payment Method
      </h2>
      <div className="w-100 paymentWrapper flex item-end column gap-3">
        <CartSummary />
        <div className="flex payment column gap-2">
          <h4 className="subtotal family3 fs-20">
            Subtotal <span className="subspan">${totalPrice}</span>
          </h4>
          <h4 className="subtotal family3 fs-20">
            Total <span className="subspan span1">${TotalShoppingPrice}</span>
          </h4>
        </div>
      </div>
    </PaymentIndexContainer>
  );
}

const PaymentIndexContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .payment {
    width: 40%;
    @media (max-width: 680px) {
      width: 70%;
    }
  }
  .paymentWrapper {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .subtotal {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    color: var(--dark-1);
    padding-top: 1rem;
    font-weight: normal;
    @media (max-width: 780px) {
      font-size: 2.4rem;
    }
    &.subtotal {
      padding: 1.4rem 0;
    }

    .subspan {
      color: var(--grey);
      &.span1 {
        color: var(--blue-2);
      }
    }
  }

  h2 {
    font-size: 3rem;
    color: var(--dark-1);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 1rem 0;
    width: 100%;
    text-align: start;
  }
`;

// <div className="payment">
// <PapmentButton />
// </div>
