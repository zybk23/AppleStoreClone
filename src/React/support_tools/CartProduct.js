import React from 'react';

const CartProduct = ({cartItems,removeItems,
                      deleteItem,increaseItems,
                     totalAmount,addToOrder
}) => {
    return (
        <div id={"cart_screen"} className={"row ml-3 mr-5  mt-4"}>

            <div className="col-md-8">
                <div className="card">
                    <div className="card-header d-flex justify-content-around ">
                        <i style={{fontSize:"45px"}} className="fas fa-cart-arrow-down icon"/>
                        <h3>Shopping Cart</h3>
                    </div>

                    <div className="card-body">
                                <table className={"table"}>
                                    <thead>
                                    <tr>
                                        <th>Your Products</th>
                                        <th>Pieces</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    {
                                        cartItems.map(item=>(
                                            <tbody  key={item.productId}>
                                            <tr>
                                                <td>
                                                    <div  className="row part-1">
                                                        <div className="col-md-4">
                                                            <img  src={item.productImage} alt=""/>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h5>{item.productTitle}</h5>
                                                            <i onClick={()=>removeItems(item.productId)}
                                                               className="fas fa-trash-alt del"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button id={"btn"} ><span>
                                                    <i onClick={()=>deleteItem(item.productId)}
                                                       className="fas fa-minus-square "/></span>
                                                        <span className={"mr-2"}>{item.quantity}</span>
                                                        <span><i onClick={()=>increaseItems(item.productId)}
                                                                 className="fas fa-plus"/></span>
                                                    </button>
                                                </td>
                                                <td>
                                                    {item.sum} $
                                                </td>
                                            </tr>
                                            </tbody>
                                        ))
                                    }
                                </table>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <h3 style={{textAlign:"center"}}>Summary of Shopping</h3>
                <div className={"d-flex justify-content-between"}>
                    <p>Total Price</p>
                    {totalAmount} $
                </div>
                <div className={"d-flex justify-content-between"}>
                    <p>Delivery</p>
                    <p style={{color:"green"}}>Free</p>
                </div>
                <hr/>
                <div className={"d-flex justify-content-between"}>
                    <p>Total Price</p>
                    <p>{totalAmount} $</p>
                </div>
                <button onClick={()=>addToOrder(cartItems)}
                        className={"btn btn-success complete"}>
                    Complete Shopping
                </button>

            </div>
        </div>
    );
};

export default CartProduct;
