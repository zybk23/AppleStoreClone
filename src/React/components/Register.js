import React, {Component} from 'react';
import "../../css/login.css"
import axios from "axios"
import alertify from "alertifyjs";



class Register extends Component{
    state={
        name:"",
        email:"",
        password:""
    };

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    validateForm=()=>{
        const {name,email,password}=this.state;
        if(name==="" || email==="" || password===""){
            return false
        }
        else{
            return true
        }
    };
    onSubmitUser=async (e)=>{
        e.preventDefault();
        const {name,email,password} =this.state;

        const newUser={
            name,email,password
        };
        if(!this.validateForm()){
            alertify.alert('Error', 'Fill in the Empty Fields', function(){
                alertify.success('Ok');
            });
        }
        else{
            await axios.post("https://json-server-apple.herokuapp.com/users",newUser)
                .then(response=>{
                    if (response.statusText==="Created"){
                        this.props.history.push("/login")
                    }
                })
                .catch(err=>console.log(err))
        }

    };
    render() {
        const {name,email,password}=this.state;
    return (
        <div className={"login bg-dark"}>
            <div className={"login-box"}>
                <form action="" onSubmit={this.onSubmitUser}>
                    <h1>Register</h1>
                    <div className="textbox">
                        <i className={"fa fa-user"}/>
                        <input type="text" placeholder={"Name"} name={"name"} value={name} onChange={this.onChange} />
                    </div>
                    <div className="textbox">
                        <i className="fas fa-envelope-square"/>
                        <input type="email" placeholder={"E-mail"} name={"email"} value={email} onChange={this.onChange} />
                    </div>
                    <div className="textbox">
                        <i className={"fa fa-lock"}/>
                        <input type="password" placeholder={"Password"} name={"password"} value={password} onChange={this.onChange} />
                    </div>
                    <input type="submit" className={"btn"} value={"Register"}/>
                </form>
            </div>
        </div>
    )};
};

export default Register;
