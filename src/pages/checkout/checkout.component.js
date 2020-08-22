import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CustomButton from '../../components/custom-button/custom-button.component';

const CheckoutPage = ({ cartItems, total, history }) => {
    return (
        <div className="checkout-page" data-testid="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(
                    item => <CheckoutItem key={item.id} cartItem={item} />
                )
                
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            {/* <div className="test-warning">
                *Please use the following test credit card for payment*
                <br/>
                4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}/> */}
            <CustomButton dataTestId='proceed-button' onClick={() => {history.push('/confirmation')}} >Proceed</CustomButton>
            <CustomButton dataTestId = 'continue-shopping-button' onClick={() => {history.push('/')}}>Continue shopping</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})



export default connect(mapStateToProps, null)(CheckoutPage);