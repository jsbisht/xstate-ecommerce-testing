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
            <CustomButton 
                dataTestId={`checkout-button`}
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })
//OR reselect

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

// function mapStateToProps ({cart: {cartItems}}) {
//     return {cartItems}
// }

export default withRouter(connect(mapStateToProps)(CartDropdown));

///*** connect by default passes dispatch to the component if no second argument is passed, from ther one can call any action required