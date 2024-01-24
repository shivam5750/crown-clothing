import { Outlet }  from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.style';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.contexts';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
    const currentUser  = useSelector(selectCurrentUser);
    const { isCartOpen }  = useContext(CartContext);

    // const signOuthandler = async () => {
    //     const res = await signOutUser();
    //     // setCurrentUser(null);
    // }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to= '/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to= '/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?(
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to= '/auth'>
                        SIGN IN
                    </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropDown />}
                {/* <CartDropDown /> */}
            </NavigationContainer>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation;