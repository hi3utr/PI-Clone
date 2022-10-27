import React from "react";

export const RightHeader = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[24px]">CP All Public Co Ltd</p>
        <div className="flex text-sm gap-6">
          <p>HQ: Bangkok</p>
          <p>Tax ID: 1234567890123</p>
          <p>Business Type: Retail</p>
          <p>Tel: 022 222 222</p>
          <p>Employee: 100000</p>
        </div>
      </div>
      <div className="mt-6 flex justify-between bg-[#f5f5f5] pl-[72px] py-[16px] rounded">
        <div>
          <p className="text-xs text-[#5F5F5F]">Sold by</p>
          <div className="flex gap-4 items-center">
            <p className="text-[#0C2F88]">COM7 Public Co Ltd</p>
            <div className="flex text-xs">
              <img src="/img/star.svg" alt="" className="w-4 h-4" />
              <p>4.8/5</p>
            </div>
            <p className="text-xs text-[#17A962] py-1 px-2 bg-[#D0F5DF] rounded">
              Registered
            </p>
          </div>
        </div>
        <div className="flex items-center mr-4 cursor-pointer">
          <p className="text-[#0C2F88] text-sm">See More Detail</p>
          <img className="h-4 w-4" src="/img/RightArr.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
