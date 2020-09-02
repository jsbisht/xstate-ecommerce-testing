import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../../redux/product/selectors';
import CustomButton from '../../atoms/CustomButton';
import { addItem } from '../../../redux/cart/cart.actions';
import './Product.scss';

const Product = ({ product, addItem }) => {
    const { name, id, imageUrl, price } = product;
    return (
        <div className="product-page" data-testid="product-page">
            <div className="product-page__container">
              <div><img src={imageUrl} alt="Product"></img></div>
              <div className="product-page__detail"> 
                <h2 className="title">{name}</h2>
                <span>Price: {price}</span>
                <CustomButton inverted onClick={() => {addItem(product)}} dataTestId={`item-${id}`}>Add to cart</CustomButton>
              </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    product: selectProduct(ownProps.match.params.categoryId)(state)
})

const mapsDispatchToProps = dispatch => ({
  addItem: product => dispatch(addItem(product))
})

export default connect(mapStateToProps, mapsDispatchToProps)(Product);