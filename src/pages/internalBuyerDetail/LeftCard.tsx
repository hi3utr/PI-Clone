import React from "react";
import { useProductList } from "../../hooks/useProductList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LeftCard = () => {
  const { products, loading } = useProductList();
  return (
    <>
      {loading &&
        Array(3)
          .fill(0)
          .map((arr) => (
            <div className="px-4 py-4">
              <Skeleton count={5} />
            </div>
          ))}
      {products.map((product) => (
        <div className="py-[16px] border-t-2 cursor-pointer border-l-4 border-l-white hover:bg-[#F3F7FF] hover:border-l-4 hover:border-l-[#0C2F88] hover:rounded">
          <div className="pl-[72px] pb-[16px]">
            <p className="text-[#0C2F88] text-[16px]">{product.name}</p>
            <p className="text-[12px] text-[#5F5F5F]">{product.location}</p>
          </div>
          <div className="text-[14px] pl-[16px] text-[#8E8E8E] grid grid-cols-2 ">
            <div>
              <p>Last Purchase:</p>
              <p>MOQ:</p>
              <p>Quantity:</p>
            </div>
            <div className="text-black">
              <p className="font-bold">THB {product.price}</p>
              <p>{product.moq}</p>
              <p>{product.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftCard;
