import React from "react";

export const RightOverview = () => {
  return (
    <div className="mt-[40px]">
      <h1 className="text-xl">Overview</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="pl-4 py-4 border-2 rounded border-l-4 border-l-[#4C5CA5]">
            <p className="text-[#5f5f5f] text-sm">PO Amount</p>
            <p className="text-lg font-bold">THB 12.8M</p>
          </div>
          <div className="pl-4 py-4 border-2 border-l-4 border-l-[#F3BA42] rounded">
            <p className="text-[#5f5f5f] text-sm">Quantity</p>
            <p className="text-lg font-bold">200</p>
          </div>
          <div className="pl-4 py-4 border-2 rounded border-l-4 border-l-[#EE868D]">
            <p className="text-[#5f5f5f] text-sm">% Cost Saving</p>
            <p className="text-lg font-bold">1.75%</p>
          </div>
          <div className="pl-4 py-4 border-2 rounded border-l-4 border-l-[#78CDD0]">
            <p className="text-[#5f5f5f] text-sm">Average Price</p>
            <p className="text-lg font-bold">THB 23500</p>
          </div>
        </div>
        <div className="px-4 py-4 border-2 rounded">
          <div className="flex justify-between">
            <p className="text-[#5F5F5F] text-sm">Price Moving Average</p>
            <div className="flex items-center cursor-pointer">
              <p className="text-xs text-[#0C2F88]">More Detail</p>
              <img src="/img/RightArr.svg" alt="" />
            </div>
          </div>
          <img className="mt-6" src="/img/Chart.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
