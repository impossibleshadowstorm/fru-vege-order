import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

const previousArrow = {
  hidden: { opacity: 0, x: "10vw" },
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
  hidden: { opacity: 0, x: "-10vw" },
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
    name: "Common Engine Oil Problems and Solutions",
    items: 235,
    imgUrl: "/images/about/member1.jpg",
  },
  {
    name: "How and when to replace brake rotors",
    items: 78,
    imgUrl: "/images/about/member2.jpg",
  },
  {
    name: "Elenance, Servicing & Repairs",
    items: 45,
    imgUrl: "/images/about/member3.jpg",
  },
  {
    name: "Healthiest Vegetables on Earth",
    items: 15,
    imgUrl: "/images/about/member4.jpg",
  },
  {
    name: "How te Your Tires Last Longer",
    items: 15,
    imgUrl: "/images/about/member3.jpg",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      variants={nextArrow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:block text-textColorBlack md:bg-otherHeaderCtaButtonBg rounded-full border-solid border-2 border-gray-300 absolute top-[100px] right-[20px] p-4 hover:bg-hoverArrowBg hover:text-textColorWhite"
      onClick={onClick}
    >
      <FaArrowRight className="text-lg " />
    </motion.div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      variants={previousArrow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:block text-textColorBlack md:bg-otherHeaderCtaButtonBg rounded-full border-solid border-2 border-gray-300 absolute top-[100px] left-[20px] z-20 p-4 hover:bg-hoverArrowBg hover:text-textColorWhite"
      onClick={onClick}
    >
      <FaArrowLeft className="text-lg" />
    </motion.div>
  );
}

const ClientFeadback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
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
    <div className="h-[75vh] bg-homeHeaderBg flex flex-col gap-2 justify-center items-center">
      <p className="text-otherTextColor">{"//"} TESTIMONIALS</p>
      <p className="text-[40px] text-textColorBlack font-bold">Clients Feedbacks.</p>

      <div className="w-[90rem] pt-5">
        <Slider {...settings}>
          {categoryData.map((item, key) => (
            <div key={key} className="bg-boxBg border relative">
              <div className="flex justify-center items-center gap-4 p-[37px]">
                <img src={item.imgUrl} alt="" className="w-[160px] h-[160px]" />
             
              <div className="flex flex-col text-textColorBlack gap-3">
                <p>
                  Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                  sed do eiusmod te mp or incididunt ut labore.consectetur adipisicing elit,
                  sed do eiusmod te mp or incididunt ut labore.
                </p>
                <div className="text-textColorBlack">
                <p className="text-lg font-bold">Rosalina D. William</p>
                <p className="text-otherTextColor font-bold text-base">Founder</p>
                </div>
              </div>
              <div className="absolute bottom-2 right-3 opacity-10">
                <FaComments size={90} />
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientFeadback;
