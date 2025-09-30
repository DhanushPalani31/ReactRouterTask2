import React from 'react'

function Card({ image, title, price, description, item ,setCartDetails,cartDetails}) {
 

  function handleCartBtn(item) {
    const AlreadyInCart=cartDetails.some((detail)=>detail.id===item.id)
    if(AlreadyInCart){
        alert("Already product in cart")
    }
    else{
       setCartDetails(prev => [...prev, item]); 
    }
    
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center rounded-md w-[300px] h-[300px] shadow-md hover:shadow-2xl">
      <div>
        <img className="w-[100px] h-[100px]" src={image} alt={title} />
      </div>
      <div>{title.slice(0, 20)}...</div>
      <div>{price}...</div>
      <div>{description.slice(0, 20)}..</div>
      <button
        className="text-[#333333] font-semibold p-2 px-10 rounded-md bg-green-500 text-white cursor-pointer"
        onClick={() => handleCartBtn(item)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Card
