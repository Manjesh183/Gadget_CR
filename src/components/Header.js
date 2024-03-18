// import React from 'react'
// import weblogo from "../asset/headphone_logo.png";
// import "./Header.css";
// import {Link,NavLink} from "react-router-dom";
// import { useCart } from '../context/CartContext';

// export const Header = () => {
//   const {cartList}=useCart();
//   return (
//     <header className='header'>
// <div className="logoSection">
//     <img src={weblogo} style={{width:"35px",height:"35px"}} href="headPhone_logo image"/>
//     <span>Gadget_Mate</span>
// </div>
// <div className="mid">
//     <Link  style={{ marginLeft: '5px', marginRight: '5px' }}  to="/">Home</Link>
//     <Link  style={{ marginLeft: '5px', marginRight: '5px' }} to="/cart">Cart</Link>
// </div>
// <div className="items">
//     <NavLink>Cart:{cartList.length}</NavLink>
// </div>
//     </header>
//   )
// }
import React from 'react';
import weblogo from "../asset/headphone_logo.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { cartList } = useCart();
  
  // Check if cartList is defined before accessing its length property
  // const cartItemCount = cartList ? cartList.length : 0;

  return (
    <header className='header'>
      <div className="logoSection">
        <img src={weblogo} style={{ width: "35px", height: "35px" }} alt="headPhone_logo image" />
        <span>Gadget_Mate</span>
      </div>
      <div className="mid">
        <Link style={{ marginLeft: '5px', marginRight: '5px' }} to="/">Home</Link>
        <Link style={{ marginLeft: '5px', marginRight: '5px' }} to="/cart">Cart</Link>
      </div>
      <div className="items">
        <NavLink to="/cart">Cart: {cartList.length}</NavLink>
      </div>
    </header>
  );
};

