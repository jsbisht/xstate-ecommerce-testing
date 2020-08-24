import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';

import CustomButton from '../../atoms/CustomButton'
import CartItem from '../../atoms/CartItem';
import { selectCartItems } from '../../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown" data-testid="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} item={item}/>)
                    ) :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <div className="button-group">
                <CustomButton 
                    dataTestId={`close-cart-button`}
                onClick={() => {
                    dispatch(toggleCartHidden());
                }}>Close</CustomButton>
                <CustomButton 
                    dataTestId={`checkout-button`}
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}



const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
