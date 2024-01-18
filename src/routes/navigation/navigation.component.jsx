import {Link, Outlet}  from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg';
import './navigation.style.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.contexts';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.contexts';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen }  = useContext(CartContext);

    // const signOuthandler = async () => {
    //     const res = await signOutUser();
    //     // setCurrentUser(null);
    // }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to= '/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to= '/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?(
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to= '/auth'>
                        SIGN IN
                    </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
                {/* <CartDropDown /> */}
            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation;