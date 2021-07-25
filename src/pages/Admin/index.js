import React, { useState, useEffect } from 'react';
import RegisterProduct from './products/add'
import RemoveProduct from './products/remove'
import ShowUsers from './users'
import LoginAdmin from './login'

export default function Admin(){
    
    const userName = localStorage.getItem('userNameActive')
    const userId = localStorage.getItem('userIdActive')
    let getProducts = localStorage.getItem('products')
    let products = JSON.parse(getProducts)


    useEffect(() => {
        getProducts = localStorage.getItem('products')
        products = JSON.parse(getProducts)
    }, [])


    return(
        <>
            {
                userName === "Admin" && userId == 205 ?
                <div>
                    <h1>Área de produtos</h1>
                    <RegisterProduct />
                    {
                        products !== undefined ?
                        products.map((product, index) => (
                            <div className="cardProduct" key={product.id}>
                                <h1>{product.name}</h1>
                                <img src={product.photo} alt="" width="auto" height="300px"/>
                                <h1>Preço: {product.price.toFixed(2)}</h1>
                                <h1>Categoria: {product.category}</h1>
                                <RemoveProduct index={`${index}`}/>
                            </div>
                        )) : 'Nenhum produto disponível para remoção'
                    }
                    <h1>Área de clientes</h1>
                    <ShowUsers />
                </div> : 
                <div>
                    <h1>Essa é uma área administrativa e portanto restrita, seu acesso foi negado!</h1>
                    <br />
                    <h1>Deseja fazer o login administrativo?</h1>
                    <LoginAdmin />
                </div>
            }
        </>
    )
}