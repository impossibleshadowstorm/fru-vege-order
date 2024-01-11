import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-[48vw] flex flex-col gap-7'>
      <div className="bg-ordertracking border px-5 py-5 text-[17px] text-textColorBlack"><p>Hello <span className='font-semibold'>UserName</span> (not <span className='font-semibold'>UserName?</span> Log out )</p></div>
      <div className="bg-ordertracking border px-5 py-5 text-[17px] text-textColorBlack">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</div>
    </div>
  )
}

export default Dashboard
