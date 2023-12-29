import React from "react";
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
<<<<<<< Updated upstream
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
      imgUrl: "./images/shopProduct/1.png",
    },
    {
      imgUrl: "./images/shopProduct/2.png",
    },
    {
      imgUrl: "./images/shopProduct/3.png",
    },
    {
      imgUrl: "./images/shopProduct/4.png",
    },
    {
      imgUrl: "./images/shopProduct/2.png",
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
        className="md:block md:bg-[white] rounded-full border-solid border-2 border-gray-300 absolute top-[270px] -right-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
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
        className="md:block md:bg-[white] rounded-full border-solid border-2 border-gray-300 absolute top-[270px] -left-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
        onClick={onClick}
      >
        <FaArrowLeft className="text-lg hover:text-[white]" />
      </motion.div>
    );
  }
=======
  },
};
>>>>>>> Stashed changes

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
    imgUrl: "./images/shopProduct/1.png",
  },
  {
    imgUrl: "./images/shopProduct/2.png",
  },
  {
    imgUrl: "./images/shopProduct/3.png",
  },
  {
    imgUrl: "./images/shopProduct/4.png",
  },
  {
    imgUrl: "./images/shopProduct/2.png",
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

function ProductDetails() {
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
    <div className="container mx-auto mt-[130px] border">
      <div className="w-[360px] h-[390px] border">
        <img src="./images/shopProduct/1.png" alt="" />
        <Slider {...settings}>
          {categoryData.map((item, key) => (
            <div key={key} className="mt-5">
              <img
                src={item.imgUrl}
                alt=""
                className="w-[205px] h-[70px] hover:duration-1000 hover:ease-in-out hover:transition"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default ProductDetails;
