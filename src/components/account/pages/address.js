import React from "react";

const Address = () => {
  return (
    <div>
      <div className="w-[48vw]">
        <p className="bg-ordertracking px-5 py-5 text-[17px] text-textColorBlack border">
          The following addresses will be used on the checkout page by default.
        </p>
      </div>
      <div className="flex mt-5 gap-[160px] ml-14 text-textColorBlack">
        <div className="flex flex-col gap-5 w-[180px] text-md">
          <p className="text-[22px] font-bold">Billing Address edit</p>
          <p className="text-[19px] font-bold">Alex Tuntuni</p>
          <p>1355 Market St, Suite 900 San Francisco, CA 94103</p>
          <p>Mobile: (123) 456-7890</p>
        </div>
        <div className="flex flex-col gap-5 w-[220px] text-md">
          <p className="text-[22px] font-bold">Shipping Address edit</p>
          <p className="text-[19px] font-bold">Alex Tuntuni</p>
          <p>1355 Market St, Suite 900 San Francisco, CA 94103</p>
          <p>Mobile: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
