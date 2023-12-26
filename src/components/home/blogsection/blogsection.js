import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaUser, FaTag, FaCalendar } from "react-icons/fa";

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
    imgUrl: "/images/home/category/7thsection/1.jpg",
  },
  {
    name: "How and when to replace brake rotors",
    items: 78,
    imgUrl: "/images/home/category/7thsection/2.jpg",
  },
  {
    name: "Elenance, Servicing & Repairs",
    items: 45,
    imgUrl: "/images/home/category/7thsection/3.jpg",
  },
  {
    name: "Healthiest Vegetables on Earth",
    items: 15,
    imgUrl: "/images/home/category/7thsection/4.jpg",
  },
  {
    name: "How te Your Tires Last Longer",
    items: 15,
    imgUrl: "/images/home/category/7thsection/5.jpg",
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
      className="md:block md:bg-[white] rounded rounded-full border-solid border-2 border-gray-300 absolute top-[270px] -right-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
      // style={{ ...style}}
      onClick={onClick}
    >
      <FaArrowRight className="text-lg hover:text-[white]" />
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
      className="md:block md:bg-[white] rounded rounded-full border-solid border-2 border-gray-300 absolute top-[270px] -left-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
      onClick={onClick}
    >
      <FaArrowLeft className="text-lg hover:text-[white]" />
    </motion.div>
  );
}

const BlogSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
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
    <div className="py-5">
      <p className="text-[white] text-center text-6xl font-bold pt-[100px] text-black">
        Leatest Blog
      </p>
      <div className="container mx-auto gap-9 mt-1 relative h-[80vh] w-[73rem]">
        <Slider {...settings}>
          {categoryData.map((item, key) => (
            <motion.div
              key={key}
              className="mt-12 relative flex flex-row gap-8 pb-4 border shadow-lg"
            >
              {/* <div className="flex flex-col justify-center items-center gap-4 pt-12 object-cover"> */}

              <div className="overflow-hidden">
                <img src={item.imgUrl} alt="" className="w-[405px] h-[240px] scale-100 hover:scale-125 hover:duration-1000 hover:ease-in-out hover:transition" />
              </div>
              <div className="container mx-auto w-[350px] flex flex-col gap-5 py-5 ">
                <div className="flex gap-7 ">
                  <div className="flex items-center gap-2">
                    <FaUser size={16} className="text-textColor" />
                    <p>by: Admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTag size={16} className="text-textColor" />
                    <p>Services</p>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <FaCalendar size={16} className="text-textColor" />
                    <p>June 24,2020</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-sm text-textColor">
                      READ MORE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>

    // <div className="bg-landingSecBg md:h-[96vh] h-[100vh] md:px-0 my-12">
    // <Slider {...settings}>
    // {categoryData.map((item, key) => (
    // <div key={key} className="max-w-[270px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl md:my-5">

    //   <div className="relative">
    //     <img className="w-[300px] h-[240px]" src={item.imgUrl} alt="Apple" />

    //     {/* <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-[#80B500] text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
    //       -{discountPercent} %
    //     </div> */}
    //   </div>
    //   <div className="px-6 py-4 text-center">

    //     {/* <p className="text-base font-bold text-[#80B500]">{name}</p> */}
    //     {/* <div className="flex gap-3 justify-center text-[#80B500] font-semibold">

    //     </div> */}
    //   </div>
    // </div>
    // ))}
    // </Slider>
    // </div>
  );
};

export default BlogSection;
