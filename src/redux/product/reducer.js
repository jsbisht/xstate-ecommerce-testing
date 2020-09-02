import PRODUCT_DATA from "./data";

const INITIAL_STATE ={
    products: PRODUCT_DATA
}

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}