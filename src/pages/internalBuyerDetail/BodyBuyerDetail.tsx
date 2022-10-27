import React from "react";
import LeftBody from "./LeftBody";
import { RightBody } from "./RightBody";

export const BodyBuyerDetail = () => {
  return (
    <div className="full-container mt-5 ">
      <div className="grid grid-cols-3 container">
        <LeftBody />
        <div className="col-span-2">
          <RightBody />
        </div>
      </div>
    </div>
  );
};
