import { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.style';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.contexts';

const CartDropDown =() => {
    
    const { cartItems }= useContext(CartContext);
    const navigate =  useNavigate();

    const checkOutHandler = () => {
        navigate('/checkout')
    }
    return  ( 
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length?cartItems.map ((item) =>(
                    <CartItem key={item.id} cartItem = {item} />
                )):
                <EmptyMessage>Your Cart Is Empty</EmptyMessage>}
            </CartItems>
            <Button 
                buttonType={BUTTON_TYPE_CLASSES.inverted} 
                onClick= {checkOutHandler}>
                CHECKOUT
            </Button>

        </CartDropDownContainer>
    )
}

export default CartDropDown;