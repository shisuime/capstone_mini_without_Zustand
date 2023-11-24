import { createContext, useState,useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem=(cartItems,cartitemtoremove)=>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartitemtoremove.id
  );

  if(existingCartItem.quantity === 1){
    return cartItems.filter((cartitem)=> cartitem.id !== cartitemtoremove.id)
  }

  return cartItems.map((cartItem) =>
      cartItem.id === cartitemtoremove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

}
const clearCartItem=(cartItems,cartitemtoclear)=>{
  return cartItems.filter((cartitem)=> cartitem.id !== cartitemtoclear.id)
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  clearItemFromCart:()=>{},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount]=useState(0)

  useEffect(()=>{
    const newcartcount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
    setCartCount(newcartcount)
  },[cartItems])

  const addItemToCart = (product) =>{
    setCartItems(addCartItem(cartItems, product));}
  const removeItemToCart = (cartitemtoremove) =>{
    setCartItems(removeCartItem(cartItems, cartitemtoremove));}
    const clearItemFromCart = (cartitemtoclear) =>{
      setCartItems(clearCartItem(cartItems, cartitemtoclear));}

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart,cartCount,removeItemToCart,clearItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};