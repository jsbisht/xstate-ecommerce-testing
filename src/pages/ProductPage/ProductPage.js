import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import { selectShopProduct } from '../../redux/product/selectors.js';
import Product from '../../components/organisms/Product/Product.js';


const ProductPage = ({ match }) => { 
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}/:categoryId`} component={Product}/>
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopProduct
})

export default connect(mapStateToProps)(ProductPage);