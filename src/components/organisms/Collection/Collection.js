import React from 'react';
import './Collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../../redux/shop/shop.selectors';
import CollectionItem from '../../molecules/CollectionItem';

const Collection = ({ collection }) => {
    
    const { title, items } = collection;
    console.log(items);
    return (
        <div className="collection-page" data-testid="category-page">
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Collection);