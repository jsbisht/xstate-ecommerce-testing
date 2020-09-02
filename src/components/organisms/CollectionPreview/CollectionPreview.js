import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../../molecules/CollectionItem';

const CollectionPreview = ( { title, items , history}) => (
    
        <div className='collection-preview'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4).map(item => (
                        <CollectionItem key={item.id} item={item} history={history}/>
                    ))
                }
            </div>            
        </div>
)

export default CollectionPreview;