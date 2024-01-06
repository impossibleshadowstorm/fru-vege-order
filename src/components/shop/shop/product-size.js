import React from 'react'

const ProductSize = () => {
  return (
    <div className="p-3">
      <div className="border">
        <div className="flex justify-left items-center gap-5 px-[30px]">
          <div className="flex">
            <p className=" rounded-3xl text-[54px] text-otherTextColor">-</p>
            <p className="rounded-full text-[42px] text-otherTextColor">.</p>
          </div>
          <p className="text-[19px] font-semibold pt-2 text-textColorBlack">Search Object</p>
        </div>

        <div className="px-5 flex flex-wrap px-[30px] pb-[30px]">
          <button type="button" className='py-2 px-4 font-semibold text-[12px] bg-homeHeaderBg border text-textColorBlack m-2 hover:bg-hoverHeaderCtaButtonBg hover:text-otherHoverTextColor'>S</button>
          <button type="button" className='py-2 px-4 font-semibold text-[12px] bg-homeHeaderBg border text-textColorBlack m-2 hover:bg-hoverHeaderCtaButtonBg hover:text-otherHoverTextColor'>M</button>
          <button type="button" className='py-2 px-4 font-semibold text-[12px] bg-homeHeaderBg border text-textColorBlack m-2 hover:bg-hoverHeaderCtaButtonBg hover:text-otherHoverTextColor'>L</button>
          <button type="button" className='py-2 px-4 font-semibold text-[12px] bg-homeHeaderBg border text-textColorBlack m-2 hover:bg-hoverHeaderCtaButtonBg hover:text-otherHoverTextColor'>XL</button>
          <button type="button" className='py-2 px-3 font-semibold text-[12px] bg-homeHeaderBg border text-textColorBlack m-2 hover:bg-hoverHeaderCtaButtonBg hover:text-otherHoverTextColor'>XXL</button>
        </div>
      </div>
    </div>
  )
}

export default ProductSize
