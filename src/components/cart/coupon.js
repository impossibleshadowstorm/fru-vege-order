import React from 'react'

const CartCoupon = () => {
  return (
    <div className='w-100% rid grid-cols-1 md:grid-cols-12 gap-4 border-b'>
    <div className=" col-span-8  px-6  py-7 ">
    <input type="text" name="cart-coupon" placeholder="Coupon code" className='px-10 py-4 border bordertext:hoverTextColor'/>
          
        </div>
    </div>
  )
}

export default CartCoupon