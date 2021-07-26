import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Users from './pages/Users'
import Admin from './pages/Admin'
import Products from './pages/Home/components/Products'
import Cart from './pages/Cart'
import RegisterUser from './pages/Users/register'

export default function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/admin" exact component={Admin}/>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/register-user" exact component={RegisterUser}/>
                    <Route path="/cart" exact component={Cart}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}