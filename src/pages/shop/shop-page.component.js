import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors.js';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component'


const ShopPage = ({ match }) => { // Match wil work here without using withRoute, because shop is called under Route tag in app.js

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={CollectionPage}/>
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);