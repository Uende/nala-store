import React, { useEffect } from 'react';
import RegisterProduct from './products/add'
import RemoveProduct from './products/remove'
import ShowUsers from './users'
import LoginAdmin from './login'
import Header from '../Home/components/Header'

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
            <Header />
            {
                userName === "Admin" && userId == 205 ?
                <div>
                    <h1 className="title">Área de produtos</h1>
                    <RegisterProduct />
                    <div className="products">
                    {
                        (products !== undefined) && (products !== null) ?
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
                    </div>
                    <h1 className="title">Área de clientes</h1>
                    <ShowUsers />
                </div> : 
                <div>
                    <br />
                    <br />
                    <h1 className="titleAdm">Essa é uma área administrativa para acessar é necessário logar com o usuário administrativo</h1>
                    <br />
                    <h1 className="titleAdm">Deseja fazer o login administrativo?</h1>
                    <LoginAdmin />
                </div>
            }
        </>
    )
}