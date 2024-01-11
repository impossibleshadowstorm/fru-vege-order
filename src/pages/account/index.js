import React from 'react'
import Account from '../../components/account/account'
import DeliveryMode from '../../components/home/deliverymode/deliverymode'
import Footer from "../../components/common/footer/footer";

const MyAccount = () => {
  return (
    <div>
      <Account />
      <DeliveryMode />
      <Footer />
    </div>
  )
}

export default MyAccount
