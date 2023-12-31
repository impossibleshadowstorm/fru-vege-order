import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaExchangeAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import RLTRAnimatedBtn from "../../common/btnComponent/rltr-animated-btn";
import DescriptionforProduct from "./description";
import ReviewOfProduct from "./review";

const previousArrow = {
  hidden: { opacity: 1, x: "0" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const nextArrow = {
  hidden: { opacity: 1, x: "0" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const categoryData = [
  {
    id: 0,
    imgUrl: "./images/shopProduct/1.png",
    name: "Mixel Solid Seat Cover",
  },
  {
    id: 1,
    imgUrl: "./images/shopProduct/2.png",
    name: "Vegetables Juices",
  },
  {
    id: 2,
    imgUrl: "./images/shopProduct/3.png",
    name: "Coil Spring Conversion",
  },
  {
    id: 3,
    imgUrl: "./images/shopProduct/4.png",
    name: "Coil Spring Conversion",
  },
  {
    id: 4,
    imgUrl: "./images/shopProduct/2.png",
    name: "Coil Spring Conversion",
  },
];

function ProductDetails() {
  const [count, setCount] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const [indexNumber, setIndexNumber] = useState(0);

  const nextImg = (id) => {
    if (id < categoryData.length - 1) {
      setSelectedImg(id + 1);
    }
    if (id === categoryData.length - 1) {
      setSelectedImg(0);
    }
  };
  const prevImg = (id) => {
    if (id > 0) {
      setSelectedImg(id - 1);
    }
    if (id === 0) {
      setSelectedImg(categoryData.length - 1);
    }
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <motion.div
        variants={previousArrow}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:block md:bg-[white] border-solid border-2 border-gray-300 absolute top-[120px] left-[11px] p-1 hover:bg-headerCtaButtonBg hover:text-white"
        onClick={() => {
          onClick();
          prevImg(selectedImg);
        }}
      >
        <FaArrowLeft className="text-lg hover:text-[white]" />
      </motion.div>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <motion.div
        variants={nextArrow}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:block md:bg-[white] border-solid border-2 border-gray-300 absolute top-[120px] left-[71px] p-1 hover:bg-headerCtaButtonBg hover:text-white"
        onClick={() => {
          onClick();
          nextImg(selectedImg);
        }}
      >
        <FaArrowRight className="text-lg hover:text-[white]" />
      </motion.div>
    );
  }

  const DecrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const IncrementCount = () => {
    setCount(count + 1);
  };

  const handleIndex = (id) => {
    setSelectedImg(id);
  };

  const descHandler = () => {
    setIndexNumber(0);
  };
  const reviewHandler = () => {
    setIndexNumber(1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto px-[60px] mt-[130px] flex gap-5 ">
        <div className="w-[360px] h-[361px] border">
          <img src={categoryData[selectedImg].imgUrl} alt="" />
          <Slider {...settings}>
            {categoryData.map((item) => (
              <div key={item.id} className="mt-5">
                <img
                  src={item.imgUrl}
                  onClick={() => handleIndex(item.id)}
                  alt=""
                  className="w-[235px] h-[80px] hover:duration-1000 hover:ease-in-out hover:transition"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="ml-[50px]">
          <ul className="flex text-starColor justify-left items-center gap-2">
            <li>
              <FaStar size={16} />
            </li>
            <li>
              <FaStar size={16} />
            </li>
            <li>
              <FaStar size={16} />
            </li>
            <li>
              <FaStarHalfAlt size={16} />
            </li>
            <li>
              <FaRegStar size={16} />
            </li>
            <li className="text-textColor">(95 Review)</li>
          </ul>

          <p className="text-[23px] font-bold">Vegetables Juices</p>
          <div className="flex gap-5 items-center text-textColor">
            <span className="text-[50px]">$49.00</span>
            <span className="text-[40px] line-through">$65.00</span>
          </div>
          <hr className="pt-4" />
          <div className="flex gap-3 pb-4">
            <p>Categories:</p>
            <div className="flex gap-2 font-semibold">
              <button type="button" className="hover:text-textColor">
                Parts,
              </button>
              <button type="button" className="hover:text-textColor">
                Car,
              </button>
              <button type="button" className="hover:text-textColor">
                Seat,
              </button>
              <button type="button" className="hover:text-textColor">
                Cover
              </button>
            </div>
          </div>
          <hr className="pt-5" />

          <div className="flex gap-8 items-center font-semibold">
            <div className="flex">
              <button
                type="button"
                className="border p-4"
                onClick={DecrementCount}
              >
                -
              </button>
              <div className="border w-[57px] flex items-center justify-center">
                {count}
              </div>
              <button
                type="button"
                className="border p-4"
                onClick={IncrementCount}
              >
                +
              </button>
            </div>
            <div className="">
              <RLTRAnimatedBtn name={"Add To Cart"} />
            </div>
          </div>
          <div className="flex gap-[35px] items-center pt-4 pb-4">
            <div className="flex gap-2 items-center hover:text-textColor cursor-pointer">
              <FaHeart />
              <span> Add to Wishlist</span>
            </div>
            <div className="flex gap-2 items-center hover:text-textColor cursor-pointer">
              <FaExchangeAlt />
              <span>Compare</span>
            </div>
          </div>
          <hr />
          <div className="flex gap-5 pt-4">
            <span>Share:</span>
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
          <div className="pt-[40px] flex flex-col justify-left">
            <p className="text-lg font-semibold pb-3">
              Guaranteed Safe Checkout
            </p>
            <img src="/images/home/category/8thsection/payment-4.png" alt="" />
          </div>
        </div>

        <div className="border flex flex-col gap-5 px-[40px]">
          <div className="flex justify-left items-center gap-5 pl-[30px]">
            <div className="flex ">
              <p className=" rounded-3xl text-[54px] text-textColor">-</p>
              <p className="rounded-full text-[42px] text-textColor">.</p>
            </div>
            <p className="text-[19px] font-bold pt-2">Top Rated Product</p>
          </div>

          {categoryData.slice(0, 3).map((item, key) => (
            <div key={key} className="flex gap-5 pt-5">
              <img
                src={item.imgUrl}
                alt=""
                className="w-[90px] h-[80px] hover:duration-1000 hover:ease-in-out hover:transition"
              />
              <div className="">
                <ul className="flex text-starColor justify-left items-center gap-1">
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
                    <FaStar size={13} />
                  </li>
                  <li>
                    <FaStar size={13} />
                  </li>
                </ul>
                <p className="font-semibold hover:text-textColor cursor-pointer">
                  {item.name}
                </p>
                <div className="flex gap-3 text-textColor">
                  <p className="font-semibold">$49.00</p>
                  <p className="line-through">$65.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* description */}
      <div className="flex justify-center gap-4">
        <div className="container mx-auto mt-[150px] px-[60px] w-[50vw]">
          <div className="flex gap-9 pb-5">
            <button
              type="button"
              onClick={descHandler}
              className="text-lg font-semibold"
            >
              Description
            </button>

            <button
              type="button"
              onClick={reviewHandler}
              className="text-lg font-semibold"
            >
              Reviews
            </button>
          </div>
          {/* <div className="w-[120px] h-[4px] border border-textColor-400"></div> */}
          <hr />

          <div className="pt-5 w-[50vw]">
            {indexNumber === 0 ? (
              <DescriptionforProduct />
            ) : (
              <ReviewOfProduct />
            )}
          </div>
        </div>
        <div className=" mt-[100px] mr-[170px]">
          <img src="./images/shopProduct/offer.jpg" alt="" className="w-[350px] h-[220px]" />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
