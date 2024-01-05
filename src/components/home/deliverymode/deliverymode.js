import React from 'react'

const DeliveryMode = () => {
  return (
    <div className='container mx-auto bg-fullBg text-textColorBlack w-[1500px] h-[163px] mb-5 shadow-lg border flex justify-around items-center gap-7'>
      <div className="flex gap-4 items-center pl-3">
        <div className="">
            <img src="images/home/category/8thsection/1.png" alt=""/>
        </div>
        <div className="">
            <p className='text-xl font-semibold pb-2'>Curated Products</p>
            <p>Provide Curated Products for all product over $100</p>
        </div>
      </div>
      <div className="h-[75px] w-0 border"></div>
      <div className="flex gap-4 items-center">
        <div className="">
            <img src="images/home/category/8thsection/2.png" alt=""/>
        </div>
        <div className="">
            <p className='text-xl font-semibold pb-2'>Handmade</p>
            <p>We ensure the product quality that is our main goal</p>
        </div>
      </div>
      <div className="h-[75px] w-0 border"></div>
      <div className="flex gap-4 items-center">
        <div className="">
            <img src="images/home/category/8thsection/3.png" alt=""/>
        </div>
        <div className="">
            <p className='text-xl font-semibold pb-2'>Natural Food</p>
            <p>Return product within 3 days for any product you buy</p>
        </div>
      </div>
      <div className="h-[75px] w-0 border"></div>
      <div className="flex gap-4 items-center">
        <div className="">
            <img src="images/home/category/8thsection/4.png" alt=""/>
        </div>
        <div className="">
            <p className='text-xl font-semibold pb-2'>Free home delivery</p>
            <p>We ensure the product quality that you can trust easily</p>
        </div>
      </div> 
    </div>
  )
}

export default DeliveryMode;
