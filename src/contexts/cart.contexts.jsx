import { createContext, useReducer } from 'react';
import { createAction } from '../utils/firebase/reducer.utils';

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
  setIsCartOpen: () => {},
  cartItems : [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearCartItem : () => {},
  cartCount : 0,
  cartTotal : 0
});

const CART_INITIAL_STATE = {
  isCartOpen : false,
  cartItems : [],
  cartCount: 0,
  cartTotal: 0
}
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN :
      return {
        ...state,
        isCartOpen : payload
      }

    default:
      throw new Error(`Unhandled type ${type} of Error`);
  }
}

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);

  const [{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  const updateCartItemsReducer = (newCartIems) => {
    const newCartCount = newCartIems.reduce((total, cartItem) => 
                                      total+cartItem.quantity, 0);

    const newCartTotal = newCartIems.reduce((total, cartItem) => 
                                      total+(cartItem.quantity*cartItem.price), 0);

    dispatch(createAction (CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems : newCartIems,
      cartCount : newCartCount,
      cartTotal : newCartTotal
    }))
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }
  const removeItemToCart = (productToremove) => {
    const newCartItems = removeCartItem(cartItems, productToremove);
    updateCartItemsReducer(newCartItems);
  }
  const clearCartItem = (productToremove) => {
    const newCartItems = clearCartItemFromCart(cartItems, productToremove);
    updateCartItemsReducer(newCartItems);
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
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