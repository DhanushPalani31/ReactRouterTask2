import React from 'react'
import Cart from '../Components/Cart'

function CartPage({cartDetails,setCartDetails}) {
  return (
    <div>
      <Cart cartDetails={cartDetails} setCartDetails={setCartDetails}  />
    </div>
  )
}

export default CartPage
