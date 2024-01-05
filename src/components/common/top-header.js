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
// import { useDispatch, useSelector } from "react-redux";
// import alldata from "../../utils/consts";
// import { darkTheme, lightTheme } from "../../reducers/website-theme-reducer";

const TopHeader = () => {
  // const theme = useSelector((state) => state.websiteTheme.theme);
  // const dispatch = useDispatch();

  // const toggleTheme = () => {
  //   if (theme === alldata.themeConstants.LIGHT_THEME) {
  //     dispatch(darkTheme());
  //   } else if (theme === alldata.themeConstants.DARK_THEME) {
  //     dispatch(lightTheme());
  //   }
  // };

  return (
    <header className="flex items-center justify-around container mx-auto">
      <div className="flex justify-between md:pl-3 md:w-[76vw] w-[90vw] h-[50px] items-center ">
        <div className="flex gap-8">
          <div className="flex gap-1 items-center">
            <FaMapMarkerAlt size={16} color="green" />
            <h5 className="text-textColorBlack">15/A Nest Tower, NYC</h5>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope size={16} color="green" />{" "}
            <h5 className="text-textColorBlack">info@webmail.com</h5>
          </div>
        </div>
        <div className="flex gap-5 md:ml-12">
          <div className="text-textColorBlack w-[90px]">
            <Dropdown label="English" inline className="bg-homeHeaderBg text-textColorBlack">
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">
                Hindi
              </Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">
                Bengali
              </Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">
                English
              </Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">
                French
              </Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">
                Arabic
              </Dropdown.Item>
              <Dropdown.Item className="text-md w-[130px] h-[30px] flex justify-center px-[67px] hover:bg-[#f1f5f9] hover:text-textColor">
                Chinese
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div
            className="contact-icon flex items-center gap-5 text-textColorBlack"
            // onClick={() => toggleTheme(dispatch, theme)}
          >
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
