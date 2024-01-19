import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';


const CartIcon = () => {
    const {isCartOpen,  setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
 return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
 )
}

export default CartIcon;