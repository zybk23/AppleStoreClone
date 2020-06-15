import React, {Component} from 'react';
import "../../css/navigation.css"
import {Link} from "react-router-dom";
import NavCart from "../components/NavCart";



class Navigation extends Component {

    navSlide=()=>{
        const menu=document.querySelector("#menu");
        const nav=document.querySelector(".nav-links");
        const navLinks=document.querySelectorAll(".nav-links li");

        menu.classList.toggle("toggle");
        nav.classList.toggle("nav-active")
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation=``;
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            }

        });

    };
    render() {

        return (
            <nav className="" role="navigation">
                <Link to={"/"}>
                    <div className="logo">
                        <i className="fab fa-apple"/>
                    </div>
                </Link>
                <ul className={"nav-links"}>
                    <li><Link to={"/"} >Home</Link></li>
                    <li><Link to={"/about"}>AddProduct</Link></li>
                    <li><Link to={"/cart"}>Shop-Cart</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
                <div id={"menu"} onClick={this.navSlide}>
                    <div className={"line-1"}/>
                    <div className={"line-2"}/>
                    <div className={"line-3"}/>
                </div>
                <div id={"cart"}>
                    <NavCart/>
                </div>

            </nav>
        );
    }
}

export default Navigation;
