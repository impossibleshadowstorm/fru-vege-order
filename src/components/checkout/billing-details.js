import React from "react";
import { FaPencilAlt, FaUserAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import RLTRAnimatedBtn from "../common/btnComponent/rltr-animated-btn";
import { FaPhoneFlip } from "react-icons/fa6";

// impot RLTRAnimatedBtn

const BillingDetails = () => {
  const options = [
    { label: "Country", value: "fruit" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];
  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="container mx-auto px-[60px] mt-[130px]">
      <div className="px-5 py-6 bg-[#F7F5EB] mb-8">
        <h5 className="text-lg font-bold">
          Returning customer?{" "}
          <a className="text-[#80B500]" href="#cd">
            Click here to login
          </a>
        </h5>
      </div>
      <div className="px-5 py-6 bg-[#F7F5EB] mb-8">
        <h5 className="text-lg font-bold">
          Have a coupon?{" "}
          <a className="text-[#80B500]" href="#cd">
            Click here to enter your code
          </a>
        </h5>
      </div>
      <h3 className="text-[26px] font-bold pb-7">Customer Reviews</h3>
      <div className="form border border-solid p-7">
        <form>
          <div className="div">
            <p>Personal Information</p>
          </div>
          <div className="space-y-9">
            <div className="">
              <div className="mt-3 grid md:grid-cols-12 gap-8 sm:grid-cols-6">
                <div className="col-span-6">
                  <div className="relative">
                    <FaUserAlt
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <input
                      type="text"
                      name="street-name"
                      placeholder="First Name"
                      id="street-name"
                      autoComplete="street-name"
                      className="block w-full  border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-6 w-full">
                  <div className="relative">
                    <FaUserAlt
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <input
                      type="text"
                      name="street-name"
                      placeholder="Last Name"
                      id="street-name"
                      autoComplete="street-name"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="mt-3 grid md:grid-cols-12 gap-8 sm:grid-cols-6">
                <div className="col-span-6">
                  <div className="relative">
                    <FaEnvelope
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <input
                      type="email"
                      name="street-address"
                      placeholder="Type your Email"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="relative">
                    <FaPhoneFlip
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <input
                      type="number"
                      name="street-address"
                      placeholder="Phone number"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="div font-bold">
                <p>Country</p>
              </div>

              <div className="mt-3 grid md:grid-cols-12">
                <div className="relative col-span-4">
                  <FaEnvelope
                    size={16}
                    className="absolute top-[16px] right-[16px] text-otherTextColor"
                  />
                  <div className="border border-solid w-100% px-5 py-4">
                    <label className="border border-solid w-100% px-5 py-4">
                      <select value={value} onChange={handleChange}>
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="div font-bold">
              <p>Address </p>
            </div>
            <div className="">
              <div className="mt-3 grid md:grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-6">
                  <div className="relative">
                    <FaGlobe
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <input
                      type="text"
                      name="street-address"
                      placeholder="House number and street name"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="relative">
                    <FaGlobe
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <input
                      type="text"
                      name="street-address"
                      placeholder="Apartment, suite, unit etc. (optional)"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="">
              <div className="mt-3 grid md:grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-4">
                  <div className="relative">
                  <div className="div font-bold pb-2">
              <p>Town/City </p>
            </div>
                    
                    <input
                      type="text"
                      name="street-address"
                      placeholder="Town/City "
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative">
                  <div className="div font-bold pb-2">
              <p>State </p>
            </div>
                    
                    <input
                      type="text"
                      name="street-address"
                      placeholder="State"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative">
                  <div className="div font-bold pb-2">
              <p>Zip </p>
            </div>
                    
                    <input
                      type="text"
                      name="street-address"
                      placeholder="Zip"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="div font-bold ">
              <p>Order Notes (optional)
 </p></div>
            <div className="">
            
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <div className="mt-2 relative">
                    <FaPencilAlt
                      size={16}
                      className="absolute top-[16px] right-[16px] text-textColor"
                    />
                    <textarea
                      name="about"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      rows={4}
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <input type="checkbox" name="" id="" />
            <span className="ml-3">
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </div>
          <div className="mt-6 flex items-center justify-left gap-x-6 ">
            <RLTRAnimatedBtn name={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
