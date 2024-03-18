import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext';

export const ProductCard = ({product}) => {
  const {cartList,AddToCart,RemoveFromCart}=useCart();
    const {id,name,image,price}=product;//destruct
const [isInCart,setIsInCart]=useState(false);

useEffect(()=>{
const isProdInCart=cartList.find(cartItem=>cartItem.id===id);
if(isProdInCart){
  setIsInCart(true);
}
else{
  setIsInCart(false);
}
},[cartList,id])



  return (
    <div className='item'>
        <img src={image}/>
        <p>{name}-XYZ101</p>
        <div className='addToCart'>
          <p>${price}</p>
          {isInCart?(<button onClick={()=>RemoveFromCart(product)} className='removeBtn'>Remove </button>):(<button onClick={()=>AddToCart(product)} className='addBtn'>Add to Cart</button>)}
          
        </div>
    </div>
  )
}

// find() returns true value if any of the listItem  passes a test (provided by a function)