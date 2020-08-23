import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionToPreview } from '../../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview';

import "./CollectionOverview.scss"

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
        {
            collections.map(({id, ...otherSelectionProps})=> (
                <CollectionPreview key={id} {...otherSelectionProps}/>
            ))
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionToPreview
})

export default  connect(mapStateToProps)(CollectionOverview);