import React from 'react';
import { CartCard } from './CartCard';
import { useTitle } from './hooks/useTitle';
import { useCart } from './context/CartContext';
export const Cart = () => {
  const {total,cartList}=useCart();//syntax to destructure an obj
  const cartItemCount = cartList ? cartList.length : 0;
  console.log(cartList);
  useTitle("Cart");
 

  return (
    <>
    <section className='CartCard'>
    <h2 style={{textAlign:"center"}}>Cart Items:{cartItemCount}/${total}</h2>
        {cartList.map((product)=>( //product-depict individual item
            
            <CartCard key={product.id} product={product} />
        ))}
    </section>
    </>
  )
}
   // const Products = [
    //     {
    //       id: 1,
    //       name: "Laptop",
    //       image: "/Images/lap.jpeg",
    //       price:"123"
    //     },
    //     {
    //       id: 2,
    //       name: "Smartphone",
    //       image: "/Images/p3.jpeg",
    //       price:"123"
    //     },
    //     {
    //       id: 3,
    //       name: "Tablet",
    //       image: "/Images/tab.jpeg",
    //       price:"123"
    //     },
    //     {
    //       id: 4,
    //       name: "Smartwatch",
    //       image: "/Images/watch.jpeg",
    //       price:"123"
    //     }
    //   ];