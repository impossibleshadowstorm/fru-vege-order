import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchObject = () => {
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

        <div className="px-5 flex px-[30px] pb-[30px]">
          <input type="search" className='bg-homeHeaderBg w-[220px] h-[55px] text-textColorBlack p-4 placeholder:text-textColorBlack focus:border-homeBorder border' placeholder='Search your keyword...'/>
          <div className="bg-hoverHeaderCtaButtonBg text-textColorBlack w-[50px] relative border">
            <FaSearch size={20} className='absolute top-[17px] left-3'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchObject
