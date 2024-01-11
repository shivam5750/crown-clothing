import './cart-dropdown.style.scss';
import Button from '../button/button.component';


const CartDropDown =() => {
    
    return  ( 
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button>Go to CheckOut</Button>
            </div>

        </div>
    )
}

export default CartDropDown;