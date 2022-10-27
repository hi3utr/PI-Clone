import React, { useState } from "react";
import { useTableList } from "../../hooks/useTableList";

export const RightTable = () => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const { products, loading } = useTableList();
  return (
    <>
      <div
        className={`${
          showTable ? "h-[350px]" : "h-[175px] opacity-60 "
        } transition-all ease-in-out duration-500 overflow-hidden`}
      >
        <table className="table-auto w-[100%] mt-6 border">
          <thead className="text-sm text-[#5F5F5F] font-normal">
            <tr className="bg-[#EBEBEB] ">
              <th>
                <div className="flex py-4 gap-2 pl-4 ">
                  Business Group
                  <img src="/img/sortDown.svg" alt="" />
                </div>
              </th>
              <th>
                <div className="flex py-4 gap-2 justify-end">
                  Purchase Amount
                  <img src="/img/sortDown.svg" alt="" />
                </div>
              </th>
              <th>
                <div className="flex py-4 gap-2 justify-end pr-4">
                  %Cost Saving
                  <img src="/img/sortDown.svg" alt="" />
                </div>
              </th>
            </tr>
          </thead>
          {products.map((product) => (
            <tbody>
              <tr className="text-sm">
                <td className="px-4 py-2 text-[#2C2C2C]">{product.name}</td>
                <td className="text-right">THB {product.amount}</td>
                <td className="flex py-2 gap-2 text-[#17A962] items-center justify-end pr-4">
                  + THB {product.valuechanged}
                  <p className="bg-[#D0F5DF] rounded px-2 py-1">
                    +{product.percent}%
                  </p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowTable(!showTable)}
          className="rounded-3xl mt-6 px-[25px] py-[9px] border w-fit"
        >
          {showTable ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};
