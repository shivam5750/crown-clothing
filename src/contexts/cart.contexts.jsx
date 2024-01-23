import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //find if cart items already contains
  const existingItem = cartItems.find( 
    (cartItem) => cartItem.id === productToAdd.id
    );
  // increment the quantity

  if(existingItem) {
    return cartItems.map(
      (cartItem) => cartItem.id === productToAdd.id ?
      {...cartItem, quantity: cartItem.quantity+1} :
      cartItem

    )
  }
  //return new array with modified array

  return [...cartItems, {...productToAdd, quantity :1}]

}

const removeCartItem = (cartItems, productToremove) => {
  const existingItem = cartItems.find( 
    (cartItem) => cartItem.id === productToremove.id
  );
  
  if(existingItem.quantity ===1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToremove.id)
  }

  if(existingItem) {
    return cartItems.map(
      (cartItem) => cartItem.id === productToremove.id ?
      {...cartItem, quantity: cartItem.quantity-1} :
      cartItem

    )
  }
}

const clearCartItemFromCart = (cartItems, productToremove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToremove.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems : [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearCartItem : () => {},
  cartCount : 0,
  cartTotal : 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total+cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total+(cartItem.quantity*cartItem.price), 0);
    setCartTotal(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));

  }
  const removeItemToCart = (productToremove) => {
    setCartItems(removeCartItem(cartItems, productToremove));

  }
  const clearCartItem = (productToremove) => {
    setCartItems(clearCartItemFromCart(cartItems, productToremove));

  }
  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    cartItems, 
    cartCount,
    removeItemToCart, 
    clearCartItem, 
    cartTotal
   };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};