import React from 'react'
import RLTRAnimatedBtn from '../../common/btnComponent/rltr-animated-btn'

const AccountDetails = () => {
  return (
    <div className='text-textColorBlack'>
      <div className="w-[48vw]">
        <p className="bg-ordertracking px-5 py-5 text-[17px] text-textColorBlack border">The following addresses will be used on the checkout page by default.</p>
      </div>

      <div className="my-9">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <label htmlFor="">First name:</label>
            <input type="text" name="" className='w-[350px] h-[60px] border border-[gray] my-2 px-4 bg-boxBg'/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Last name:</label>
            <input type="text" name="" className='w-[350px] h-[60px] border border-[gray] my-2 px-4 bg-boxBg'/>
          </div>
        </div>
        <div className="flex gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">Display Name:</label>
            <input type="text" name="" placeholder='Ethan' className='w-[350px] h-[60px] border border-[gray] my-2 px-4 placeholder:text-textColorBlack bg-boxBg'/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Display Email:</label>
            <input type="email" name="" placeholder='example@example.com' className='w-[350px] h-[60px] border border-[gray] my-2 px-4 placeholder:text-textColorBlack bg-boxBg'/>
          </div>
        </div>

        <div className="border mt-20">
          <div className="p-14">
            <p className='text-[22px]'>PASSWORD CHANGE</p>
            <div className="">
              <p>Current password (leave blank to leave unchanged):</p>
              <input type="text" name="" className='w-[640px] h-[60px] border border-[gray] my-2 px-4 bg-boxBg' />
            </div>
            <div className="mt-5">
              <p>New password (leave blank to leave unchanged):</p>
              <input type="text" name="" className='w-[640px] h-[60px] border border-[gray] my-2 px-4 bg-boxBg' />
            </div>
            <div className="mt-5">
              <p>Confirm new password:</p>
              <input type="text" name="" className='w-[640px] h-[60px] border border-[gray] my-2 px-4 bg-boxBg' />
            </div>
          </div>
        </div>
        <div className="mt-3">
        <RLTRAnimatedBtn name={"SAVE CHANGES"} />
        </div>
      </div>
    </div>
  )
}

export default AccountDetails
