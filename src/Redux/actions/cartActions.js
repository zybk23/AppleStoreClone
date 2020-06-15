


export const addToCart=({product,quantity})=>{
    return {type:"ADD_ITEM",payload:{product,quantity}}
};

export const deleteItemFromCart=(productId)=>{
    return {type:"DELETE_FROM_CART",payload:productId}
};

export const removeFromCart=(productId)=>{
    return {type:"REMOVE_FROM_CART",payload:productId}
};

export const increaseItem=(productId)=>{
    return {type:"INCREASE_ITEM",payload:productId}
};
