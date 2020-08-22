import { createSelector } from 'reselect';

const selectshop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectshop],
    shop => shop.collections
);

// As we converted the array data in shop.data into hash data, we again need to convert it into array, as map donot work on hash
export const selectCollectionToPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
);