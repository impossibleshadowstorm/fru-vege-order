import React from "react";
import SingleProductCard from "../../home/product/single-product-card";
import data from "../../../utils/consts.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      variants={nextArrow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:block md:bg-[white] rounded-full border-solid border-2 border-gray-300 absolute top-[180px] -right-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
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
      className="md:block md:bg-[white] rounded-full border-solid border-2 border-gray-300 absolute top-[180px] -left-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
      onClick={onClick}
    >
      <FaArrowLeft className="text-lg hover:text-[white]" />
    </motion.div>
  );
}

const RelatedProduct = () => {
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
    <div>
      <p className="text-[45px] font-bold">RelatedProduct</p>

      <div className="pt-5">
        <Slider {...settings}>
          {data.featuredata.map((item, index) => (
            <SingleProductCard
              key={index}
              name={item.name}
              discountedPrice={item.discountedPrice}
              originalPrice={item.originalPrice}
              imageUrl={item.imgUrl}
              discountPercent={item.discountPercent}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProduct;
