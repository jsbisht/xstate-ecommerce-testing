import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors.js';
import CollectionOverview from "../../components/organisms/CollectionOverview";
import { Route } from 'react-router-dom';
import Collection from '../../components/organisms/Collection'


const Shop = ({ match }) => { 

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={Collection}/>
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(Shop);