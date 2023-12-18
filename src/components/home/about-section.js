import React from "react";
import {motion} from 'framer-motion';

const content = {
  hidden: { opacity: 0, x:'10vw' },
  show: {
    opacity: 1,
    x: '0',
    transition: {
      type: 'spring',
      delay: 0.2
    }
  }
}

const picContainer = {
  hidden: { opacity: 0, x:'-10vw' },
  show: {
    opacity: 1,
    x: '0',
    transition: {
      type: 'spring',
      delay: 0.2
    }
  }
}

const AboutSection = () => {
  return (
    <div>
      <motion.div 
      className="container gap-14 mx-auto md:pl-12 flex md:flex-row flex-col justify-center items-center md:mt-14 mt-12 md:p-5 ">

        <motion.div
        variants={picContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0}}

        className="w-30vw h-30vh">
          <img src="/images/2ndsectionpic1.png" alt="2ndsectionpic" />
        </motion.div>

        <motion.div 
         variants={content}
         initial="hidden"
         whileInView="show"
         viewport={{once:false, amount:0}}

        className="container mx-auto md:pl-12 md:h-[90vh] md:w-[50%] w-[100%] flex flex-col items-left md:justify-center justify-start gap-8">
          <div className="text-base font-bold text-[#80B500]">
            KNOW MORE ABOUT SHOP
          </div>
          <div className="md:text-5xl text-4xl md:w-[25vw] font-bold">
            <p>Trusted Organic Food Store</p>
          </div>
          <div className="md:w-[31vw] md:pt-1 md:pb-1 flex flex-row gap-6">
            <div className="h-[55px] border border-5 border-[#80B500]"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
              amet ab? Molestias odio accusamus accusantium voluptatem.
            </p>
          </div>
          <div className="md:w-[31vw]">
            <span>
              {" "}
              sellers who aspire to be good, do good, and spread goodness. We
              democratic, self-sustaining, two-sided marketplace which thrives
              on trust and is built on community and quality content
            </span>
          </div>
          <div className="flex gap-9">
            <div className="">
              <p className="text-base font-bold">Jerry Henson</p>
              <p>/ Shop Director</p>
            </div>
            <div className="">
              <img src="/images/author-sign.png" alt="" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
