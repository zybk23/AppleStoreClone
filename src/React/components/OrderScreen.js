import React from 'react';
import {useSelector} from "react-redux";
import OrderList from "../support_tools/OrderList";
import posed from "react-pose";


const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtStart:{
            display:"none"
        }
    }
});


const OrderScreen = () => {
    const orders=useSelector(state=>state.orderListReducer.orders);

    return (
        <div  className={"orderScreen"}>
            <OrderList orders={orders} Animation={Animation}/>
        </div>


    );
};

export default OrderScreen;
