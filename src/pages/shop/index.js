import React from 'react'
import ProductDetails from '../../components/shop/product-details/product-details'
import DeliveryMode from '../../components/home/deliverymode/deliverymode'
import FooterForAll from '../../components/common/footer/footerforall'



const Shop = () => {
  return (
    <div>
      <ProductDetails />
        <DeliveryMode />
        <FooterForAll />
    </div>
  )
}

export default Shop