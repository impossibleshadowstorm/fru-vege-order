import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import { Dropdown } from "flowbite-react";

const ShopProduct = () => {
  return (
    <div className="container w-[53vw]">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <FaThLarge size={28} />
          <FaList size={28} />
        </div>
        <p className="text-md font-bold">Showing 1–12 of 18 results</p>
        <div className="text-black border px-[30px] py-[14px] z-50">
          <Dropdown label="Default Sorting" inline>
            <Dropdown.Item className="text-md h-[30px] flex justify-center px-[17px] hover:bg-[#f1f5f9] hover:text-textColor">
              Default Sorting
            </Dropdown.Item>
            <Dropdown.Item className="text-md h-[30px] flex justify-center px-[17px] hover:bg-[#f1f5f9] hover:text-textColor">
              Sort by popularity
            </Dropdown.Item>
            <Dropdown.Item className="text-md h-[30px] flex justify-center px-[17px] hover:bg-[#f1f5f9] hover:text-textColor">
              Sort by new arrivals
            </Dropdown.Item>
            <Dropdown.Item className="text-md h-[30px] flex justify-center px-[17px] hover:bg-[#f1f5f9] hover:text-textColor">
              Sort by prize: low to high
            </Dropdown.Item>
            <Dropdown.Item className="text-md h-[30px] flex justify-center px-[17px] hover:bg-[#f1f5f9] hover:text-textColor">
              Sort by prize: high to low
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
