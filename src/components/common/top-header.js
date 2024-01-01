import React from "react";
import { Dropdown } from "flowbite-react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <header className="flex items-center justify-around container mx-auto">
      <div className="flex justify-between md:pl-3 md:w-[76vw] w-[90vw] h-[50px] items-center ">
        <div className="flex gap-8">
          <div className="flex gap-1 items-center">
            <FaMapMarkerAlt size={16} color="green" />
            <h5>15/A Nest Tower, NYC</h5>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope size={16} color="green" /> <h5>info@webmail.com</h5>
          </div>
        </div>
        <div className="flex gap-5 md:ml-12">
          <div className="text-black w-[90px]">
            <Dropdown label="English" inline>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">Hindi</Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">Bengali</Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">English</Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">French</Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">Arabic</Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">Chinese</Dropdown.Item>
            </Dropdown>
          </div>
         
          <div className="contact-icon flex items-center gap-5">
            <FaFacebook size={16} className="cursor-pointer" />
            <FaInstagram size={16} className="cursor-pointer" />
            <FaTwitter size={16} className="cursor-pointer" />
            <FaTelegram size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default TopHeader;
