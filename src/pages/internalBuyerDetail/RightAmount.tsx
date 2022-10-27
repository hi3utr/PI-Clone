import React from "react";

export const RightAmount = () => {
  return (
    <div>
      <div className="mt-[40px]">
        <h1 className="text-xl">PO Amount by Business Group</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col h-fit gap-4 border-2 rounded">
            <div className="mx-4 py-4 flex flex-col gap-2 border-b-2">
              <div className="flex gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/img/ArrUp.svg" alt="" />
                  <p className="text-[#5f5f5f] text-sm">Max Price</p>
                </div>
                <p className="text-xs text-[#8E8E8E]">16/08/2022</p>
              </div>
              <p className="text-lg font-bold">THB 32,300.00</p>
              <p className="text-sm">Human Resource</p>
            </div>
            <div className="px-4 pb-4 flex flex-col gap-2 h-fit">
              <div className="flex text-[#5f5f5f] text-sm justify-between">
                <p className="text-[#8e8e8e]">Average Price:</p>
                <p className="text-[#2C2C2C]">THB 25,500.00</p>
              </div>
              <div className="flex text-[#5f5f5f] text-sm justify-between">
                <p className="text-[#8e8e8e]">Quantity:</p>
                <p className="text-[#2C2C2C]">2,600</p>
              </div>
              <div className="flex text-[#5f5f5f] text-sm justify-between">
                <p className="text-[#8e8e8e]">VS. Company Average:</p>
                <p className="text-[#FF4820]">+10.50%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-fit gap-4 border-2 rounded">
            <div className="mx-4 py-4 flex flex-col gap-2 border-b-2">
              <div className="flex gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/img/ArrDown.svg" alt="" />
                  <p className="text-[#5f5f5f] text-sm">Min Price</p>
                </div>
                <p className="text-xs text-[#8E8E8E]">16/08/2022</p>
              </div>
              <p className="text-lg font-bold">THB 24,500.00</p>
              <p className="text-sm">Marketing</p>
            </div>
            <div className="px-4 pb-4 flex flex-col gap-2">
              <div className="flex text-[#5f5f5f] text-sm justify-between">
                <p className="text-[#8e8e8e]">Average Price:</p>
                <p className="text-[#2C2C2C]">THB 25,500.00</p>
              </div>
              <div className="flex text-[#5f5f5f] text-sm justify-between">
                <p className="text-[#8e8e8e]">Quantity:</p>
                <p className="text-[#2C2C2C]">2,600</p>
              </div>
              <div className="flex text-[#5f5f5f] text-sm justify-between">
                <p className="text-[#8e8e8e]">VS. Company Average:</p>
                <p className="text-[#17A962]">-5.10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
