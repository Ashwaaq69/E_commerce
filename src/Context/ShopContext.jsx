import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const shopcontext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 0; index < all_product.length; index++) {
    Cart[all_product[index].id] = 0;
  }
  return Cart;
};

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalcartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * CartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = ()=>{
    let totalItem=0;
    for(const item in CartItems){
      if(CartItems[item]>0){
        totalItem += CartItems[item]
      } 

    }
    return totalItem;
  }

  const contextValue = { getTotalCartItems,getTotalcartAmount, all_product, CartItems, addToCart, removeFromCart };

  return (
    <shopcontext.Provider value={contextValue}>
      {props.children}
    </shopcontext.Provider>
  );
};

export default ShopContextProvider;
