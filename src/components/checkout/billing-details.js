import React from "react";
import { FaPencilAlt, FaUserAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import RLTRAnimatedBtn from "../common/btnComponent/rltr-animated-btn";
import { FaPhoneFlip } from "react-icons/fa6";
// import PaymentMode from "./payment-mode";


const BillingDetails = () => {
  const options = [
    { label: "Select Country", value: "fruit" },

    { label: "India", value: "vegetable" },

    { label: "United State (US)", value: "meat1" },

    { label: "United Kingdom (UK)", value: "meat2" },

    { label: "Nepal", value: "meat3" },

    { label: "Canada", value: "meat4" },

    { label: "China", value: "meat5" },
  ];
  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container mx-auto mt-[130px]">
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
      <h3 className="text-[26px] font-bold pb-7">Billing Details</h3>
      <div className="form border border-solid p-7 bg-formBg">
        <form className="">
          <div className="font-bold">
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
                      className="block focus:outline-[#80B500] w-full border p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold">
                <p>Country</p>
              </div>

              <div className="grid md:grid-cols-12">
                <div className="relative col-span-4 mt-4">
                  {/* <div className="absolute right-0 top-4">
                  <FaArrowDown size={16} />
                  </div> */}
                  <div className="bg-white w-100%">
                    <label className="w-100%">
                      <select value={value} onChange={handleChange} className="py-3 pl-[20px] pr-[178px] font-semibold">
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="pb-4 font-bold">Address </p>
              <div className="grid md:grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-3 grid md:grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-4">
                  <div className="relative">
                    <div className="font-bold pb-2">
                      <p>Town/City </p>
                    </div>

                    <input
                      type="text"
                      name="street-address"
                      placeholder="Town/City "
                      id="street-address"
                      autoComplete="street-address"
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
                      className="block focus:outline-[#80B500] w-full border border-solid p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-bold pb-4">Order Notes (optional)</p>
              <div className="grid grid-cols-1 sm:grid-cols-6">
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
                      className="block focus:outline-[#80B500] w-full rounded-md border p-3 text-gray-900 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"
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
