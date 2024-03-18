import React from 'react';
import "./CartCard.css";
import { useCart } from './context/CartContext';

export const CartCard = ({ product }) => {
    const {RemoveFromCart}=useCart();
    const { name, image,price } = product;
    
    return (
        <div className="cartCard">
           
        <div className="itemRow">
            <img src={image} alt={name} />
           <p className="product_name"> {name}</p>
           <p className="product_price">${price}</p>
           <button onClick={()=>RemoveFromCart(product)} className='btn'>Remove</button>
            
        </div>
        </div>
    )
}
