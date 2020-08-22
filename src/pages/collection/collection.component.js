import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component.js'

const CollectionPage = ({ collection }) => {
    
    const { title, items } = collection;
    console.log(items);
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
                <div className="items">
                    {
                        items.map( item => (
                            <CollectionItem key={item.id} item={item}/>
                            )
                        )
                    }
                </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({ // ownProps is the props of the component
    collection: selectCollection(ownProps.match.params.categoryId)(state) // NOOB
})

export default connect(mapStateToProps)(CollectionPage);