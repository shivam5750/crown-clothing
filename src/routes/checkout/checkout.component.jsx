import { HeaderBlock, CheckoutHeader, CheckoutContainer, Total } from './checkout.style';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import CheckOutItem from '../../component/checkout-item/checkout-item.component';

const CheckOut =() => {
    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => 
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default CheckOut;