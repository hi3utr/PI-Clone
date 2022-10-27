import React from "react";

export const ProductHeader = () => {
  return (
    <div className="full-container">
      <div className="py-[26px] flex gap-[40%] container">
        <div className="flex gap-6">
          <div className="border-2 rounded h-[100px] w-[100px]"></div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl">DELL Latitude 3420</p>
            <a href="" className="text-[#0C2F88] text-[12px]">
              See Specifications
            </a>
            <div className="flex gap-4 text-[14px]">
              <div className="flex gap-2 cursor-pointer">
                <img src="/img/bookmark-outline.svg" alt="" />
                <p>Add to Bookmark</p>
              </div>
              <p className="text-[#EBEBEB]">|</p>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Add to compare</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-l-2 pl-6">
          <p className="text-[14px] text-[#5F5F5F]">Average Price</p>
          <p className="font-bold text-[20px]">THB 24,500.00 /Each</p>
          <p className="text-[14px]">Last Purchase: THB 23500</p>
        </div>
      </div>
    </div>
  );
};
