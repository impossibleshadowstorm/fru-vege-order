import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaArrowDown,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="flex justify-between w-[76vw] h-[50px] items-center ">
        <div className="flex gap-8">
          <div className="flex gap-1 items-center">
            <FaMapMarkerAlt size={16} color="green" />
            <h5>15/A Nest Tower, NYC</h5>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope size={16} color="green" /> <h5>info@webmail.com</h5>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            English <FaArrowDown size={16} color="green" />
          </div>
          <div className="contact-icon flex gap-5">
            <FaFacebook size={16} />
            <FaInstagram size={16} />
            <FaTwitter size={16} />
            <FaTelegram size={16} />
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default TopHeader;
