import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
// import { Delete } from "../modals";
import {
  removeBagItem,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
} from "../../Features";
import { RxCross1 } from "react-icons/rx";

export default function Card({ x, type }) {
  const dispatch = useDispatch();

  return (
    <tr key={x?._id}>
      <td className="svg">
        <div className="iconsWrapper" onClick={() => dispatch(onCartAlert(x))}>
          <RxCross1 />
        </div>
      </td>
      <td>
        <div className="cartProduct">
          <div className="imageWrapper">
            <img src={x?.image} alt="images" />
          </div>
        </div>
      </td>
      <td className="title">{x?.title}</td>
      <td>{x?.price}</td>
      <td>
        <div className="btnWrapper">
          <button
            className="cartBtn"
            disabled={x?.quantity === x?.countInStock}
            onClick={() => dispatch(increaseBagQty(x))}
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          >
            <BiPlus />
          </button>
          <h3>{x?.quantity}</h3>
          <button
            className="cartBtn"
            disabled={x?.quantity === 1}
            onClick={() => dispatch(decreaseBagQty(x))}
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <BiMinus />
          </button>
        </div>
      </td>
      <td className="title">{x?.price * x?.quantity}</td>
    </tr>
  );
}
