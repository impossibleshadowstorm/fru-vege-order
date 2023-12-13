import React from 'react'

const LeftLandingSection = ({cIdx}) => {
  return (
    <div className="h-20vh md:h-[70vh] w-[100%] md:w-[50%] flex flex-col justify-center md:pt-0 pt-9">
    <div className={`flex flex-row gap-1 md:items-center mb-4 w-[100%] md:w-[30vw] ${cIdx % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-center`}>
      <img src="/images/pic1.png" alt="pic1" />
      <p>100% Genuine Product</p>
    </div>
    <div className={`flex flex-col md:w-[30vw] justify-center`}>
      <span className={`md:text-5xl text-3xl md:w-[30vw] ${cIdx %2 === 0 ? "": "w-[65vw]"} m-auto font-bold ${cIdx %2 === 0 ? "": "text-right"}`}>
        {cIdx % 2 === 0 ? "Tasty & Healthy Organic Food": "Our Garden's Most Favorite Food"}
      </span>
      
      <span className={`md:pt-5 md:w-[30vw] w-[60vw] m-auto ${cIdx %2 === 0 ? "": "text-right"}`}>
      {cIdx % 2 === 0 ? "" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At autem modi provident suscipit itaque corrupti dolore dolor."}
      </span>
    </div>
    <div className={`md:w-[30vw] mt-12 flex gap-3 ${cIdx % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-center`}>
      <button
        type="button"
        className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
      >
        Explore Products
      </button>
      <button
        type="button"
        className={`${cIdx % 2 === 0 ? "" : "bg-[white] text-black h-[52px] w-[160px] font-medium"}`}
      >
        {cIdx % 2 === 0 ? "" : "Learn More"}
        
      </button>
    </div>
  </div>
  )
}

export default LeftLandingSection
