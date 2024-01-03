import React from 'react'

const FilterByPrize = () => {
  return (
    <div className="p-3">
      <div className="border">
        <div className="flex justify-left items-center gap-5 px-5">
          <div className="flex">
            <p className=" rounded-3xl text-[54px] text-textColor">-</p>
            <p className="rounded-full text-[42px] text-textColor">.</p>
          </div>
          <p className="text-[16px] font-bold pt-2">Filter By Price</p>
        </div>

        <div className="px-5">
          <div className="flex gap-8 pt-2">
          <p>Your range:</p>
          <p>$50 - $1500</p>
          {/* <FaLongArrowAltRight className="text-textColor"/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterByPrize
