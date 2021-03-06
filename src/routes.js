import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Users from './pages/Users'
import Admin from './pages/Admin'
import Products from './pages/Home/components/Products'
import Cart from './pages/Cart'
import RegisterUser from './pages/Users/register'
import RegisterProduct from './pages/Admin/products/add'

export default function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/register-user" component={RegisterUser}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/addproduct" component={RegisterProduct}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}