import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../../assets/original.svg';
import { auth } from '../../../firebase/firebase.utils';
import CartIcon from '../../atoms/CartIcon';
import CartDropdown from '../CartDropdown';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to="/shop"> SHOP </Link>
                <Link className='option' to="/shop"> CONTACT </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    : 
                    <Link className='option' to="/signin">SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : 
                <CartDropdown/>
            }
            
        </div>
        
    )
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);