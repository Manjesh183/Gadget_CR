import { createContext, useReducer } from "react";
import { useContext } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0
}
const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
   
const [state,dispatch]=useReducer(cartReducer,initialState);//state is an obj with variables like cartList,total ie CartContext info

 const AddToCart=(product)=>{
    const updatedCartList=state.cartList.concat(product);
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            items:updatedCartList //items is a ready updated list of items after add Clk
        }

    })
    updateTotal(updatedCartList);

}
const RemoveFromCart=(product)=>{
    const updatedCartList=state.cartList.filter((current)=>current.id !==product.id);
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:{
            items:updatedCartList //items is updated list of items after Delete Clk
        }
})
updateTotal(updatedCartList);
}

const updateTotal = (items) => { //updatedCartList passed to items
    let total = 0; //total is total price here
    items.forEach(item => {
        // console.log(item.price); // Log individual item prices
        total += item.price;
        
    });
  
    dispatch({
        type: "UPDATE_TOTAL",
        payload: {
            total:total
        }
    });
};

    
const value = {
        total:state.total,
        cartList:state.cartList,
        AddToCart,
        RemoveFromCart
    }; //we will have this value info in every Comp
     
    return (
        <CartContext.Provider value={value}>
            {children} 
        </CartContext.Provider>
    )
}
export const useCart=()=>{
    const context=useContext(CartContext); //CartContext has 2 var& 2 mtds ie returned as context;useCart is just return value of useContext mtd
    return context;
}
 // {children} --depicts <App/> since its wrapped in CartProvider means it will access all info of CartProvider
// useCart is a fun to return/send  val of "value"(having total,Mtds)  to a component.
// instead of Custom function useCart,you can export useContext &CartContext and import them in a component and use like
// const {total}=useContext(CartContext)--sending value of total here



// note-made CartContext and initiliased with initialState.we created our own Provider(CartProvider) which takes <App/> and then use actual CartProvider ie <CartContext.Provider> ie retaining val of value and pass it  to children. So,<App/> has access to "value" like total. 

//state can have multiple variables But updatedCartList only has updated CartList
