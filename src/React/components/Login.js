import React,{useState} from 'react';
import "../../css/login.css"
import {Link} from "react-router-dom";
import alertify from "alertifyjs";
import axios from "axios"


const Login = (props) => {
    const [emailChange,setAnswer]=useState({email:""});
    const [passwordChange,setPassword]=useState({password:""});



    const onEmailChange=(e)=>{
        setAnswer({
            email:e.target.value
        })
    };
    const onPasswordChange=(e)=>{
        setPassword({
            password:e.target.value
        })
    };

    const {email}=emailChange;
    const {password}=passwordChange;
    const validateForm=()=>{

        if(email==="" || password===""){
            return false
        }
        else{
            return true
        }
    };

    const loginUser=async (e)=>{
        e.preventDefault();

        const loginUser={
            email,password
        };

        if(!validateForm()){
            alertify.alert('Error', 'Fill in the Empty Fields', function(){
                alertify.success('Ok');
            });
        }
        else{
            await axios.post("https://json-server-apple.herokuapp.com/users",loginUser)
                .then(response=>{
                    if (response.statusText==="Created"){
                        props.history.push("/")
                    }
                })
                .then(result=>{
                    setTimeout(()=>{
                        alert("Log-In Successfully")
                    },1000)

                })
                .catch(err=>console.log(err))
        }


    };

    return (
        <div className={"login bg-dark"}>
            <div className={"login-box"}>
                <h1>Login</h1>
                <form action="" onSubmit={loginUser}>
                    <div className="textbox">
                        <i className="fas fa-envelope-square"/>
                        <input type="email" placeholder={"E-mail"} name={"email"} value={email} onChange={onEmailChange} />
                    </div>
                    <div className="textbox">
                        <i className={"fa fa-lock"}/>
                        <input type="password" placeholder={"Password"} name={"password"} value={password} onChange={onPasswordChange} />
                    </div>
                    <input type="submit" className={"btn"} value={"Sign-In"}/>
                    <Link to={"/register"}><input type="button" className={"btn"} value={"Register"}/></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
