import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // converted it into cents
    const publishableKey = 'pk_test_gThA8DXPbTPKanO2zajGX3kw009DhtLKmj';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

// const mapStateToProps = createStructuredSelector({
//     price: selectCartTotal
// })

export default StripeCheckoutButton;