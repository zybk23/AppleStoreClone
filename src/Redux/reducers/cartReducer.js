import CartItem from "../../React/models/cartItem";


const initialState={
    items:{},
    totalAmount:0,
    count:""
};

export default function cartReducer(state=initialState, action){
    switch (action.type){
        case "ADD_ITEM":
            const addedProduct=action.payload;
            const prodPrice=parseInt(addedProduct.product.price);
            const prodTitle=addedProduct.product.name;
            const image=addedProduct.product.image;
            let updateOrNewItem;

            if (state.items[addedProduct.product.id]){
                updateOrNewItem=new CartItem(
                    state.items[addedProduct.product.id].quantity+1,
                    image,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.product.id].sum+prodPrice
                );
            }
            else {
                updateOrNewItem=new CartItem(1,image,prodPrice,prodTitle,prodPrice)
            }

            return {
                ...state,
                items:{...state.items,[addedProduct.product.id]:updateOrNewItem},
                totalAmount: state.totalAmount+prodPrice
            };

        case "DELETE_FROM_CART" :
            const selectedCartItem=state.items[action.payload];
            const currentCount=selectedCartItem.quantity;

            let updatedCartItems;
            if(currentCount >1){
                const updatedCartItem=new CartItem(
                    selectedCartItem.quantity-1,
                    selectedCartItem.image,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum-selectedCartItem.productPrice
                );
                updatedCartItems={...state.items,[action.payload]:updatedCartItem}
            }
            else{
                updatedCartItems={...state.items};
                delete updatedCartItems[action.payload]
            }
            return{
                ...state,
                items:updatedCartItems,
                totalAmount: state.totalAmount-selectedCartItem.productPrice,
            };

        case "REMOVE_FROM_CART" :
            const selectedItem={...state.items};
            const deleteAll=state.items[action.payload];
            delete selectedItem[action.payload];
            return {
                ...state,
                items:selectedItem,
                totalAmount: state.totalAmount-deleteAll.sum
            };

        case "INCREASE_ITEM":
            const increaseItem=state.items[action.payload];
            let updatedSum;
            const updatedItem=new CartItem(
                increaseItem.quantity+1,
                increaseItem.image,
                increaseItem.productPrice,
                increaseItem.productTitle,
                increaseItem.sum+increaseItem.productPrice
            );
            updatedSum={...state.items,[action.payload]:updatedItem};
            return{
                ...state,
                items:updatedSum,
                totalAmount: state.totalAmount+increaseItem.productPrice,
            };
        case "ADD_ORDER":
            return initialState;

        default:
            return state
    }
}
