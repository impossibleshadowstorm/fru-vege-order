import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="h-[70vh] w-[100vw] text-white bg-black mt-[100px] ">
        <div className="flex justify-around gap-4 h-[60vh] items-center pt-[110px]">
          {/* contact */}
          <div className="w-[20vw]  flex flex-col gap-6 h-[46vh] text-[17px] ml-5">
            <img
              src="/images/logo-2.png"
              alt="logo"
              className="filter contrast-75 w-[190px] h-[50px]"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi eligendi suscipit exercitationem reprehenderit
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt size={16} />
                <p>Brooklyn, New York, United States</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhoneAlt size={16} />
                <p className="hover:text-hoverTextColor cursor-pointer">
                  +0123-456789
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FaEnvelope size={16} />
                <p className="hover:text-hoverTextColor cursor-pointer">
                  example@example.com
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <FaFacebook
                size={18}
                className="cursor-pointer hover:text-hoverTextColor"
              />
              <FaInstagram
                size={18}
                className="cursor-pointer hover:text-hoverTextColor"
              />
              <FaTwitter
                size={18}
                className="cursor-pointer hover:text-hoverTextColor"
              />
              <FaTelegram
                size={18}
                className="cursor-pointer hover:text-hoverTextColor"
              />
            </div>
          </div>
          {/* middle */}
          <div className="w-[50vw] h-[46vh] flex justify-around">
            {/* company */}
            <div className="">
              <div className="pt-5">
                <h3 className="text-[22px]">Company</h3>
              </div>
              <div className="pt-[30px] ml-[-15px]">
                <ul className="flex flex-col gap-4 text-[17px] ">
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      About
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Blog
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      All Products
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Location Map
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      FAQ
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Contact us
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* service */}
            <div className="">
              <div className="pt-5">
                <h3 className="text-[22px]">Services.</h3>
              </div>
              <div className="pt-[30px] ml-[-15px]">
                <ul className="flex flex-col gap-4 text-[17px]">
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                    {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Order tracking
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Wish List
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Login
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      My Account
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Terms & Conditions
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Promotional Offers
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* customer care */}
            <div className="">
              <div className="pt-5">
                <h3 className="text-[22px]">Customer Care</h3>
              </div>
              <div className="pt-[30px] ml-[-15px]">
                <ul className="flex flex-col gap-4 text-[17px]">
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                    {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Login
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                    {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      My Account
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                    {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Wish List
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                    {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Order tracking
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                    {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      FAQ
                    </span>
                  </li>
                  <li className="hover:translate-x-6 group">
                    <span className="text-black group-hover:text-hoverTextColor">
                      {"//"}
                    </span>
                    <span className="cursor-pointer hover:text-hoverTextColor">
                      Contact us
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* news latter */}
          <div className="w-[20vw] h-[46vh] mr-9">
            <div className="py-5 ">
              <h3 className="text-[23px]">Newsletter</h3>
            </div>
            <div className="flex flex-col gap-7 text-[17px]">
              <p>
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
              <div className="flex flex-row">
                <input
                  type="search"
                  name=""
                  placeholder="Email*"
                  className="text-black px-5 w-[240px] h-[60px]"
                />
                <div className="hover:bg-black hover:border w-[66px] h-[60px] bg-headerCtaButtonBg flex justify-center items-center">
                  <FaLocationArrow size={20} />
                </div>
              </div>
              <div>
                <p className="pb-3 font-semibold">We Accept</p>
                <img
                  src="/images/home/category/8thsection/payment-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[90px] text-white bg-black border-t-[1px]">
        <div className="flex justify-between my-[34px] px-5">
          <p>All Rights Reserved @ Company 2023</p>
          <ul className="flex gap-5">
            <li className="cursor-pointer hover:text-hoverTextColor">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:text-hoverTextColor">Claim</li>
            <li className="cursor-pointer hover:text-hoverTextColor">
              Privacy & Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
