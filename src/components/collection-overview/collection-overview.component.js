import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionToPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import "./collection-overview.styles.scss"

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