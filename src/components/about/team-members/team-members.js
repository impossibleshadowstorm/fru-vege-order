import React from 'react'
import alldata from "../../../utils/consts.js"
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";


const TeamMembers = () => {
  return (
    <div className='h-[90vh] container mx-auto flex flex-col gap-4 justify-center items-center py-[53px]'>
      <div className="">
        <p className='text-[60px] font-bold text-textColorBlack'>Team Member</p>
      </div>
      <div className="flex gap-4 justify-center">
         {alldata.MembersDetails.map((item , key)=> (
        <div className="w-[18vw] h-[55vh] border hover:shadow-lg">
            <div key={key} className="flex flex-col justify-center items-center gap-3">
                <img src={item.Imgurl} alt=""/>
                <p className='text-otherTextColor font-semibold'>{"//"} {item.pos} {"//"}</p>
                <p className='text-lg font-bold hover:text-otherTextColor text-textColorBlack cursor-pointer'>{item.name}</p>
                <div className="flex gap-5">
                    <FaFacebook size={19} className='cursor-pointer text-textColorBlack hover:text-textColor'/>
                    <FaTwitter size={19} className='cursor-pointer text-textColorBlack hover:text-textColor'/>
                    <FaLinkedin size={19} className='cursor-pointer text-textColorBlack hover:text-textColor'/>
                </div>
            </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default TeamMembers
