import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
import FILTER_PRODUCTS from "../../utils/consts.js";

const data = {
  food_drinks: [
    {
      name: "Fruits2",
      items: 45,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Meat3",
      items: 15,
      imgUrl: "/images/3rdsec-category-4.png",
    },
    {
      name: "Fish4",
      items: 15,
      imgUrl: "/images/3rdsec-category-5.png",
    },
    {
      name: "Others5",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Others6",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Vegetables7",
      items: 78,
      imgUrl: "/images/3rdsec-category-2.png",
    },
    {
      name: "Fruits8",
      items: 45,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Meat9",
      items: 15,
      imgUrl: "/images/3rdsec-category-4.png",
    },
    {
      name: "Fish10",
      items: 15,
      imgUrl: "/images/3rdsec-category-5.png",
    },
    {
      name: "Others11",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Others12",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Vegetables13",
      items: 78,
      imgUrl: "/images/3rdsec-category-2.png",
    },
    {
      name: "Fruits14",
      items: 45,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Meat15",
      items: 15,
      imgUrl: "/images/3rdsec-category-4.png",
    },
    {
      name: "Fish16",
      items: 15,
      imgUrl: "/images/3rdsec-category-5.png",
    },
    {
      name: "Others17",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Others18",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Others19",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
  ],
  vegetables: [
    {
      name: "Vegetables",
      items: 78,
      imgUrl: "/images/3rdsec-category-2.png",
    },
    {
      name: "Fruits",
      items: 45,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/3rdsec-category-4.png",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/3rdsec-category-5.png",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/3rdsec-category-3.png",
    },
  ],
};

const Products = () => {
  const [category, setCategory] = useState("food_drinks");
  console.log(data[category]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col container mx-auto justify-center items-center gap-2 ">
      <div className="container h-[100vh] mx-auto justify-center items-center gap-1">
        <Slider {...settings}>
          {data[category].length % 2 === 0
            ? data[category].map((item, key) => {
                if (key % 2 === 0) {
                  console.log(key);
                  return (
                    <div>
                      <div className="max-w-[300px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl">
                        <div className="relative">
                          <img
                            className="w-[300px] h-[240px]"
                            src="/images/our-products-img/food&drinks-5.png"
                            alt="Apple"
                          />
                          <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-[#80B500] text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
                            -19 %
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="py-1">
                            <ul className="flex text-[#ffb800] justify-center items-center gap-2">
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStarHalfAlt size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaRegStar size={16} />
                                </a>
                              </li>
                              <li className="text-[#80B500]">
                                <a href="#">(24)</a>
                              </li>
                            </ul>
                          </div>
                          <p className="text-base font-bold text-[#80B500]">
                            {item.name}
                          </p>
                          <div className="flex gap-3 justify-center text-[#80B500] font-semibold">
                            <span>$32.00</span>
                            <span className="line-through">$46.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-[300px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl">
                        <div className="relative">
                          <img
                            className="w-[300px] h-[240px]"
                            src="/images/our-products-img/food&drinks-5.png"
                            alt="Apple"
                          />
                          <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-[#80B500] text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
                            -19 %
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="py-1">
                            <ul className="flex text-[#ffb800] justify-center items-center gap-2">
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStarHalfAlt size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaRegStar size={16} />
                                </a>
                              </li>
                              <li className="text-[#80B500]">
                                <a href="#">(24)</a>
                              </li>
                            </ul>
                          </div>
                          <p className="text-base font-bold text-[#80B500]">
                            {data[category][key+1]["name"]}
                          </p>
                          <div className="flex gap-3 justify-center text-[#80B500] font-semibold">
                            <span>$32.00</span>
                            <span className="line-through">$46.00</span>
                          </div>
                        </div>
                      </div> 
                    </div>
                  );
                }
                return null;
              })
            : data[category].map((item, key) => {
                // console.log((data[category].length + 1) / 2);
                if (key % 2 === 0) {
                  console.log(key);
                  return (
                    <div>
                      <div className="max-w-[300px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl">
                        <div className="relative">
                          <img
                            className="w-[300px] h-[240px]"
                            src="/images/our-products-img/food&drinks-5.png"
                            alt="Apple"
                          />
                          <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-[#80B500] text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
                            -19 %
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="py-1">
                            <ul className="flex text-[#ffb800] justify-center items-center gap-2">
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStarHalfAlt size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaRegStar size={16} />
                                </a>
                              </li>
                              <li className="text-[#80B500]">
                                <a href="#">(24)</a>
                              </li>
                            </ul>
                          </div>
                          <p className="text-base font-bold text-[#80B500]">
                            {item.name}
                          </p>
                          <div className="flex gap-3 justify-center text-[#80B500] font-semibold">
                            <span>$32.00</span>
                            <span className="line-through">$46.00</span>
                          </div>
                        </div>
                      </div>
                      {(key + 1) !== data[category].length ? <div className="max-w-[300px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl">
                        <div className="relative">
                          <img
                            className="w-[300px] h-[240px]"
                            src="/images/our-products-img/food&drinks-5.png"
                            alt="Apple"
                          />
                          <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-[#80B500] text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
                            -19 %
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="py-1">
                            <ul className="flex text-[#ffb800] justify-center items-center gap-2">
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStarHalfAlt size={16} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaRegStar size={16} />
                                </a>
                              </li>
                              <li className="text-[#80B500]">
                                <a href="#">(24)</a>
                              </li>
                            </ul>
                          </div>
                          <p className="text-base font-bold text-[#80B500]">
                            {data[category][(key + 1) == data[category].length ? key : key+1]["name"]}
                          </p>
                          <div className="flex gap-3 justify-center text-[#80B500] font-semibold">
                            <span>$32.00</span>
                            <span className="line-through">$46.00</span>
                          </div>
                        </div>
                      </div> : <></>}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
