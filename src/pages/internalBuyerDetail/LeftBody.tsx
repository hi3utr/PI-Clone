import React from "react";
import LeftCard from "./LeftCard";
import { useProductList } from "../../hooks/useProductList";

const LeftBody = () => {
  const { products } = useProductList();

  return (
    <div className="border-r-2 ">
      <div className="flex gap-20 py-6 justify-between">
        <p className="font-bold">All Buyers ({products.length})</p>
        <div className="flex items-center gap-2 pr-4 cursor-pointer">
          <img src="/img/sortDown.svg" alt="" />
          <p>Last Purchase</p>
          <img src="/img/dropdown.svg" alt="" />
        </div>
      </div>
      <div className="flex gap-6 px-[20px] py-[25px] border-t-2 border-l-4 border-l-white hover:bg-[#F3F7FF] hover:border-l-4 hover:border-l-[#0C2F88] hover:rounded">
        <img src="/img/Overview.svg" alt="" />
        <p className="text-[#0C2F88]">Product Overview</p>
      </div>
      <LeftCard />
    </div>
  );
};

export default LeftBody;
