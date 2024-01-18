import './checkout.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import CheckOutItem from '../../component/checkout-item/checkput-item.component';

const CheckOut =() => {
    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => 
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default CheckOut;