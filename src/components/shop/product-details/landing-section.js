import React, {useState} from "react";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaHeart,
  FaExchangeAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import RLTRAnimatedBtn from "../../common/btnComponent/rltr-animated-btn";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import data from "../../../utils/consts.js";


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

const LandingSection = () => {

    
  const [count, setCount] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  
  const nextImg = (id) => {
    if (id < data.categoryData.length - 1) {
      setSelectedImg(id + 1);
    }
    if (id === data.categoryData.length - 1) {
      setSelectedImg(0);
    }
  };

  const prevImg = (id) => {
    if (id > 0) {
      setSelectedImg(id - 1);
    }
    if (id === 0) {
      setSelectedImg(data.categoryData.length - 1);
    }
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

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <motion.div
        variants={previousArrow}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:block text-textColorBlack md:bg-otherHeaderCtaButtonBg hover:bg-hoverArrowBg hover:text-textColorWhite border-solid border-2 border-gray-300 absolute top-[120px] left-[11px] p-1"
        onClick={() => {
          onClick();
          prevImg(selectedImg);
        }}
      >
        <FaArrowLeft className="text-lg" />
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
        className="md:block text-textColorBlack md:bg-otherHeaderCtaButtonBg hover:bg-hoverArrowBg hover:text-textColorWhite border-solid border-2 border-gray-300 absolute top-[120px] left-[71px] p-1"
        onClick={() => {
          onClick();
          nextImg(selectedImg);
        }}
      >
        <FaArrowRight className="text-lg" />
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
  return (
    <>
      <div className="w-[360px] h-[361px] border">
        <img src={data.categoryData[selectedImg].imgUrl} alt="" />
        <Slider {...settings}>
          {data.categoryData.map((item) => (
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
          <li className="text-otherTextColor">(95 Review)</li>
        </ul>

        <p className="text-[23px] text-textColorBlack font-bold">Vegetables Juices</p>
        <div className="flex gap-5 items-center text-otherTextColor">
          <span className="text-[50px]">$49.00</span>
          <span className="text-[40px] line-through">$65.00</span>
        </div>
        <hr className="pt-4" />
        <div className="flex gap-3 pb-4 text-textColorBlack">
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
              className="border p-4 text-textColorBlack"
              onClick={DecrementCount}
            >
              -
            </button>
            <div className="border w-[57px] flex items-center justify-center text-textColorBlack">
              {count}
            </div>
            <button
              type="button"
              className="border p-4 text-textColorBlack"
              onClick={IncrementCount}
            >
              +
            </button>
          </div>
          <div className="">
            <RLTRAnimatedBtn name={"Add To Cart"} />
          </div>
        </div>
        <div className="flex gap-[35px] text-textColorBlack items-center pt-4 pb-4">
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
        <div className="flex gap-5 pt-4 text-textColorBlack">
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
          <p className="text-lg text-textColorBlack font-semibold pb-3">Guaranteed Safe Checkout</p>
          <img src="/images/home/category/8thsection/payment-4.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingSection;
