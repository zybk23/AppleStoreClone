import React from 'react';
import Navigation from "./React/navigation/Navigation";
import {Route,Switch} from "react-router-dom"
import Home from "./React/components/Home";
import Register from "./React/components/Register";
import Login from "./React/components/Login";
import CartScreen from "./React/components/CartScreen";
import OrderScreen from "./React/components/OrderScreen";
import AddItemFormPage from "./React/components/AddItem_Form_Page";
import './App.css';


function App() {
  return (
    <div>
        <Navigation/>
        <Switch>
            <Route path={"/login"} exact component={Login}/>
            <Route path={"/register"} exact component={Register}/>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/cart"} exact component={CartScreen}/>
            <Route path={"/about"} exact component={AddItemFormPage}/>
            <Route path={"/detail"} exact component={OrderScreen}/>
        </Switch>
    </div>
  );
}

export default App;
