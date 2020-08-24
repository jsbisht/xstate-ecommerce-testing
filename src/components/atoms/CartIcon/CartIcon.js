import React from 'react';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { selectCartItemsCount, selectCartHidden } from '../../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount, hidden}) => {
    // { toggleCartHidden } = this.props.toggleCartHidden /// toggleCartHidden = this.props
    return (
        <button className="cart-icon" onClick={() => {if(hidden) toggleCartHidden()} } data-testid='cart-icon'>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);