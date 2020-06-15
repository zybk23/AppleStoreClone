import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {getProduct} from "../../Redux/actions/productActions";
import "../../css/home.css"
import Product from "../support_tools/Product";

const Home = () => {
    const products=useSelector(state=>state.productReducer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProduct())
    },[]);

    const maxPrice=Math.max(...products.map(product=>product.price));
    return (
        <div id={"home"} >
            <Product products={products} maxPrice={maxPrice}/>
        </div>
    );
};

export default Home;
