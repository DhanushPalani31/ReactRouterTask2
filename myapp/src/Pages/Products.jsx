import React from 'react'
import RenderAllCards from '../Components/RenderAllCards'

function Products({cartDetails,setCartDetails,cardDetails,setCardDetails}) {
  return (
    <div>
      <RenderAllCards cartDetails={cartDetails} setCartDetails={setCartDetails} cardDetails={cardDetails} setCardDetails={setCardDetails} />
    </div>
  )
}

export default Products
