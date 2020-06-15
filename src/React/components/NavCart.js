import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {removeFromCart} from "../../Redux/actions/cartActions";
import "../../css/home.css"
import {Link} from "react-router-dom";





const NavCart = () => {
    const dispatch=useDispatch();
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

    const removeItems=(id)=>{
        dispatch(removeFromCart(id))
    };
    const Empty=()=>{
        return (
                <li className="nav-item dropdown">
                    <Link to={"/"} className="nav-link dropdown-toggle " id="navbarDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i  className="fas fa-cart-arrow-down icon1"/>
                    </Link>

                    <div className="dropdown-menu alert alert-danger" aria-labelledby="navbarDropdown">
                        <span style={{fontSize:15}} className={""}> Add Item</span>
                    </div>
                </li>

        )
    };
    const Summary=()=>{
        return (
            <li className="nav-item dropdown">
                <Link to={"/"} className="nav-link dropdown-toggle " id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-cart-arrow-down icon2"/>
                </Link>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                        cartItems.map(item=>(
                            <div to={"/contact"} key={item.productId} className="dropdown-item d-flex justify-content-between">
                                <table className={"table"}>
                                    <tbody>
                                        <tr>
                                            <td><img width={40} height={40} src={item.productImage} alt=""/></td>
                                            <td>
                                                <div className={"d-flex justify-content-between"}>
                                                    <Link style={{textDecoration:"none"}} to={"/cart"}>
                                                        <p className={"mr-2"}>{item.productTitle}</p>
                                                    </Link>
                                                    <span style={{color:"#BDB8B4"}} className={"pb-2"}>x{item.quantity}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i onClick={()=>removeItems(item.productId)}
                                                   style={{color:"red",cursor:"pointer"}} className="fas fa-times-circle mt-1 ml-2"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                </div>
            </li>
        )
    };


    return (
        <div>
            {
                cartItems.length>0 ? Summary() : Empty()
            }
        </div>
    );
};

export default NavCart;
