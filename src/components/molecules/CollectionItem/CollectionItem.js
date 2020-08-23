import React from 'react'
import './CollectionItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.actions';
import CustomButton from '../../atoms/CustomButton';

const CollectionItem = ({item, addItem}) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)} dataTestId={`item-${id}`}>Add to cart</CustomButton>
        </div>
    )
}

const mapsDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
// addItem is function which is passed to this component as a props, wil take an argument
export default connect(null, mapsDispatchToProps)(CollectionItem);