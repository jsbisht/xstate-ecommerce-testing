import { createSelector } from 'reselect';

const selectProducts = state => state.product;

export const selectShopProduct = createSelector(
    [selectProducts],
    product => product.products
);

export const selectProductToPreview = createSelector(
    [selectShopProduct],
    product => Object.keys(product).map(key => product[key])
)

export const selectProduct = collectionUrlParam => createSelector(
    [selectShopProduct],
    product => product[collectionUrlParam]
);