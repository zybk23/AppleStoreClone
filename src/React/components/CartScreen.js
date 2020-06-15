import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "../../css/cartScreen.css"
import {deleteItemFromCart,removeFromCart,increaseItem} from "../../Redux/actions/cartActions";
import {addOrder} from "../../Redux/actions/orderActions";
import CartProduct from "../support_tools/CartProduct";



const CartScreen = (props) => {
    const dispatch=useDispatch();
    const totalAmount=useSelector(state=>state.cartReducer.totalAmount);

    const cartItems=useSelector(state=>{
        const transformedCartItems=[];
        for (const key in state.cartReducer.items){
            transformedCartItems.push({
                productId:key,
                productImage:state.cartReducer.items[key].image,
                productTitle:state.cartReducer.items[key].productTitle,
                productPrice:state.cartReducer.items[key].productPrice,
                quantity:state.cartReducer.items[key].quantity,
                sum:state.cartReducer.items[key].sum
            })
        }
        return transformedCartItems.sort((a,b)=>a.productId>b.productId ?1:-1)
    });

    const addToOrder=(data,totalAmount)=>{
        dispatch(addOrder(data,totalAmount));
        setTimeout(()=>{
            props.history.push("/detail")
        },600)

    };

    const removeItems=(id)=>{
        dispatch(removeFromCart(id))
    };
    const deleteItem=(id)=>{
        dispatch(deleteItemFromCart(id))
    };
    const increaseItems=(id)=>{
        dispatch(increaseItem(id))
    } ;



    return (
        <div id={"home"}>
            {
                cartItems.length>0?<CartProduct cartItems={cartItems}
                                                removeItems ={(id)=>removeItems(id)}
                                                deleteItem={(id)=>deleteItem(id)}
                                                increaseItems={(id)=>increaseItems(id)}
                                                totalAmount={totalAmount}
                                                addToOrder={(data)=>addToOrder(data,totalAmount)}
                />:<div className={"alert alert-danger container mt-5"}>
                   Your Shopping Cart is Empty
                </div>
            }
        </div>


    );
};

export default CartScreen;
