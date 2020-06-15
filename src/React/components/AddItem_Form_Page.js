import React, {Component} from 'react';
import "../../css/form.css"
import alertify from "alertifyjs"
import axios from "axios"
import {addProduct} from "../../Redux/actions/productActions";
import Form from "../support_tools/Form";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";


class AddItemFormPage extends Component {
    state={
        name:"",
        image:"",
        price:"",
        unitInStock: "",
        color:"",
        type:"",
        description:""
    };

    validateForm=()=>{
        const {name,image,price,unitInStock,color,type,description}=this.state;
        if ( name===""
            || image==="" || price===""
            || unitInStock==="" || color==="" || type==="" || description===""){
            return false
        }
        else{
            return true
        }
    };

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    onSubmitProducts=async (e)=>{
        e.preventDefault();
        const {name,image,price,unitInStock,color,type,description}=this.state;
        const newProduct={
            name,image,price,unitInStock,color,type,description
        };

        if(!this.validateForm()){
            alertify.alert('Error', 'Fill in the Empty Fields', function(){
                alertify.success('Ok');
            });
        }
        else{
            const response=await axios.post("https://json-server-apple.herokuapp.com/products",newProduct);
            this.props.actions.addUser(response.data);

            this.props.history.push("/")
        }

    };

    render() {
        const tools=this.state;
        return (
            <div id={"home"} className={"form-page"}>
                <Form tools={tools} onSubmitProducts={this.onSubmitProducts} onChange={this.onChange} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:{
            addUser:bindActionCreators(addProduct,dispatch)
        }
    }
}

export default connect(null,mapDispatchToProps)(AddItemFormPage) ;
