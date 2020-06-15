import React, {useState} from 'react';
import "../../css/order.css"




const OrderList = ({orders,Animation}) => {
    const [showDetail,setShowDetails]=useState(false);
    const change=(id)=>{
        setShowDetails(prevState=>!prevState)
    };
    return (
        <div id={"order"} className={"container "}>
            {
                orders.map(order=>{

                    return <div key={order.id} className={"card"}>
                        <div className="card-header d-flex justify-content-between">
                            <h3>Total Amount : {order.totalAmount} $</h3>
                            <p>{order.readableDate}</p>
                            <button className={"btn btn-success"}
                                    onClick={()=>change(order.id)}>
                                {showDetail?"Hide Details":"Show Details"}

                            </button>
                        </div>
                        <Animation pose={showDetail?"visible":"hidden"}>
                            {
                                order.items.map(item=>
                                    <div key={item.productId} className={"card-body "}>
                                        <div className={"d-flex justify-content-between"}>
                                            <img width={50} height={50} src={item.productImage} alt=""/>
                                            <div className={"div-1"}>
                                                <p>{item.productTitle}</p>
                                                <p>price: {item.productPrice} $</p>
                                            </div>
                                            <div className={"div-2"}>
                                                <p>x {item.quantity}</p>
                                                <p>total :{item.sum} $</p>
                                            </div>

                                        </div>
                                    </div>)

                            }
                        </Animation>
                    </div>

                })
            }
        </div>
    );
};

export default OrderList;
