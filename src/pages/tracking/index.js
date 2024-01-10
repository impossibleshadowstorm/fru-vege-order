import React from 'react'
import Tracking from '../../components/order-tracking/tracking'
import DeliveryMode from '../../components/home/deliverymode/deliverymode'
import Footer from '../../components/common/footer/footer'

const OrderTracking = () => {
  return (
    <div>
      <Tracking />
      <DeliveryMode />
      <Footer />
    </div>
  )
}

export default OrderTracking
