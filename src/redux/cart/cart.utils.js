export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        item => item.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(
            item => 
            item.id === cartItemToAdd.id 
            ? { ...item, quantity: item.quantity + 1}
            : item
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemTORemove) => {
    const existingCartItem = cartItems.find(
        item => item.id === cartItemTORemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter( item => item.id !== existingCartItem.id)
    }

    return cartItems.map(
        item => 
        item.id === cartItemTORemove.id 
        ? { ...item, quantity: item.quantity - 1}
        : item
    )
}