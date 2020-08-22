import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/original.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => {
    console.log(currentUser, 'SignINCom')
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

/// Without Destructuring
//const mapStateToProps = state => ({ // {user: {currentUser}, cart: {hidden}}
    // currentUser: state.user.currentUser 
    /// it's taking access to the rootReducer from where it goes to user i.e. a userReducer and assigning the value to currentUser                    
    // state is refered to the entire store, where the property currentUser is a prop in the form of this.props.currentUser
// });

/// Using Destructuring
/// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({ // {user: {currentUser}, cart: {hidden}}
 ///   currentUser, hidden
    /// it's taking access to the rootReducer from where it goes to user i.e. a userReducer and assigning the value to currentUser                    
    // state is refered to the entire store, where the property currentUser is a prop in the form of this.props.currentUser
///});

// const mapStateToProps = (state) => ({ // {user: {currentUser}, cart: {hidden}}
    // currentUser: selectCurrentUser(state),
//    hidden: selectCartHidden(state)
       /// it's taking access to the rootReducer from where it goes to user i.e. a userReducer and assigning the value to currentUser                    
       // state is refered to the entire store, where the property currentUser is a prop in the form of this.props.currentUser
// });

//    OR
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

// connect takes two argguments, first is state to props second is dispatchtoprops