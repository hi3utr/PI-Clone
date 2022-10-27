import React from "react";
import { RightAmount } from "./RightAmount";
import { RightHeader } from "./RightHeader";
import { RightOverview } from "./RightOverview";
import { RightTable } from "./RightTable";

export const RightBody = () => {
  return (
    <div className="py-10 pl-6">
      <RightHeader />
      <RightOverview />
      <RightAmount />
      <RightTable />
    </div>
  );
};
