import React from 'react'
import './CollectionItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.actions';
import CustomButton from '../../atoms/CustomButton';

<<<<<<< HEAD:src/components/molecules/CollectionItem/CollectionItem.js
const CollectionItem = ({item, addItem}) => {
    const { id, name, price, imageUrl } = item;
=======
const CollectionItem = ({item, addItem, history}) => {
    const { id, name, price, imageUrl, linkUrl } = item;
>>>>>>> 4e410c4083a24ed5751a9e9e2d409767b9189450:src/components/collection-item/collection-item.component.js
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <div className="collection-item__button-group">
                <CustomButton 
                    dataTestId={`go-to-item-${id}`} 
                    className='collection-item__view-cart-btn' 
                    onClick = {
                        () => history.push(`/${linkUrl}`)
                    }
                    inverted>View product</CustomButton>
                <CustomButton inverted onClick={() => addItem(item)} dataTestId={`item-${id}`}>Add to cart</CustomButton>
            </div>
        </div>
    )
}

const mapsDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
// addItem is function which is passed to this component as a props, wil take an argument
export default connect(null, mapsDispatchToProps)(CollectionItem);