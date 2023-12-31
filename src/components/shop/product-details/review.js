import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import data from "../../../utils/consts.js";
import AddReview from "./add-review.js";
import RelatedProduct from "./related-product.js";
 

const ReviewOfProduct = () => {
  return (
    <div>
      <h3 className="text-[26px] font-bold">Customer Reviews</h3>

      <div className="">
        <div className="mt-5">
          <ul className="flex text-starColor justify-left items-center gap-2">
            <li>
              <FaStar size={13} />
            </li>
            <li>
              <FaStar size={13} />
            </li>
            <li>
              <FaStar size={13} />
            </li>
            <li>
              <FaStarHalfAlt size={13} />
            </li>
            <li>
              <FaRegStar size={13} />
            </li>
            <li className="text-textColor">(95 Review)</li>
          </ul>
        </div>
        <hr />

        <div className="mt-[90px] flex flex-col gap-14 justify-center items-center">
          {data.MembersDetails.slice(0, 3).map((item, key) => (
            <div key={key} className="flex gap-6 justify-center items-center">
              <div className="">
                <img
                  src={item.Imgurl}
                  alt=""
                  className="w-[120px] h-[98px] rounded-full"
                />
              </div>
              <div className="">
                <div className="flex justify-between">
                  <p className="font-bold">{item.name}</p>
                  <button
                    type="button"
                    className="py-2 px-4 border rounded-3xl hover:border-homeBorder"
                  >
                    September 2, 2020
                  </button>
                </div>
                <div className="">
                  <ul className="flex text-starColor justify-left items-center gap-2">
                    <li>
                      <FaStar size={11} />
                    </li>
                    <li>
                      <FaStar size={11} />
                    </li>
                    <li>
                      <FaStar size={11} />
                    </li>
                    <li>
                      <FaStarHalfAlt size={11} />
                    </li>
                    <li>
                      <FaRegStar size={11} />
                    </li>
                    <li className="text-textColor">(95 Review)</li>
                  </ul>
                </div>
                <p className="text-[15px] pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus, omnis fugit corporis iste magnam ratione.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* add review */}

        <div className="mt-[90px] bg-[#F0F4F7]">
          <AddReview />
        </div>
      </div>
      <div className="my-[90px] w-[80vw]">
        <RelatedProduct />
      </div>
    </div>
  );
};

export default ReviewOfProduct;
