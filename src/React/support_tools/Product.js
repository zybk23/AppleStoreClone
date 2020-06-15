import React, {Component} from 'react';
import {addToCart} from "../../Redux/actions/cartActions";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import ProductFilterForm from "./ProductFilterForm";
import "../../css/product.css"
import alertify from "alertifyjs"



class Product extends Component {

    state={
        type:"all",
        price:3000,
        color:"chose",
        filter:"",
        click:true
    };

    filterSearch=(e)=>[
        this.setState({
            filter:e.target.value
        })
    ];

    handleChange=(e)=>{
            const target=e.target;
            const value=target.value;
            const name=e.target.name;
            this.setState({
                [name]:value
            },this.filterProducts)
        };
    filterProducts=()=>{
        let {type,color,price}=this.state;
        let product=this.props.products;
        let tempProducts=[...product];

        price=parseInt(price);

        if(type!=="all"){
            tempProducts=tempProducts.filter(product=>product.type===type)
        }
         if(color!=="chose"){
             tempProducts=tempProducts.filter(product=>product.color===color)
         }

        if(price!==3000){
            tempProducts=tempProducts.filter(product=>product.price<=price);
        }

         tempProducts=tempProducts.filter(product=>{
             return product.name.toLowerCase().indexOf(
                 this.state.filter.toLowerCase()
             )!==-1
         });
        return tempProducts
    };

    Favorite=(id)=>{
        let liste=[];
        const fav=document.querySelectorAll("#favorite")
        fav.forEach((item,index)=>{
            liste.push(item)
        });
        if(liste[id].classList.toggle("change")){
            alertify.success("Added to Favorite")
        }
        else{
            alertify.error("Remove from Favorite")
        }
    };
    AddToItem=(product)=>{

            this.props.addCart({quantity:1,product});
            alertify.success("Product Added");
        };

    render(){
        const {type,color,filter,price}=this.state;
            return (
                <div>
                    <ProductFilterForm
                        type={type} color={color}
                         handleChange={this.handleChange} price={price}
                        products={this.props.products}
                    />
                    <div id={"search"} className={"product"}>
                        <form action="" className={"form-inline my-2 ml-5"}>
                            <input value={filter} name={"filter"} onChange={this.filterSearch}
                                   className="form-control mr-sm-2" type="search" placeholder="Search"
                            />
                            <i className="fas fa-search"/>
                        </form>
                        {
                            this.filterProducts().map((product,index)=>{
                                return <div key={product.id} className={"card ml-3"}>
                                    <div className="card-header bg-secondary">{product.name}</div>
                                    <div className="card-body">
                                        <img  src={product.image} alt=""/>
                                        <button  type={"button"} className={"btn btn-secondary"}>
                                            <p>{product.price} $</p> <span>unitInStock:{product.unitInStock}</span>
                                        </button>

                                        <p><i className="fas fa-angle-double-right location"/><span className={"ml-2"}> {product.description}</span></p>
                                    </div>
                                    <div className={"icons d-flex justify-content-between"}>
                                        <i id={"favorite"}  className="far fa-heart"
                                           onClick={()=>this.Favorite(index)} />
                                        <i className="fas fa-cart-arrow-down cart"
                                           onClick={()=>this.AddToItem(product)}/>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            );
        }

};

function mapDispatchToProps(dispatch){
    return {
        addCart:bindActionCreators(addToCart,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Product) ;
