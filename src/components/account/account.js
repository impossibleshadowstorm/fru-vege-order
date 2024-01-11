import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaArrowDown,
  FaMapMarker,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/order";
import Downloads from "./pages/download";
import Address from "./pages/address";
import AccountDetails from "./pages/account-detail";

const Account = () => {

  const [indexNumber, setIndexNumber] = useState(1);

  const menuItem = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Orders", icon: <FaFileAlt /> },
    { name: "Downloads", icon: <FaArrowDown /> },
    { name: "Address", icon: <FaMapMarker /> },
    { name: "Account Details", icon: <FaUser /> },
    { name: "Logout", icon: <FaSignOutAlt /> },
  ];

  const components = [
    <Dashboard />,
    <Orders />,
    <Downloads />,
    <Address />,
    <AccountDetails />,
  ];

  return (
    <div className="container mx-auto w-[76vw] mt-[120px] mb-14">
      <div className="flex gap-9">
        <div className="border h-[21.4rem] w-[23vw]">
          {menuItem.map((item, index) => (
            <div key={index} onClick={() => (setIndexNumber(index))}>
              <div 
                className={`flex justify-between items-center p-4 border-b text-textColorBlack hover:text-otherTextColor ${indexNumber === index ? "bg-black border text-white hover:text-white" : "none"}`}
              >
                <p>{item.name}</p>
                <div className="">{item.icon}</div>
              </div>
            </div>
          ))}

        </div>
      <div className="">
      {components[indexNumber]}
      </div>
      </div>
    </div>
  );
};

export default Account;
