import React, { useState, useEffect } from 'react';
import productsDefault from '../../../../api/products';
import AddProductDefault from '../../../Cart/add/addProductDefault'
import AddProductNew from '../../../Cart/add/addProductNew'

export default function Produtos(){
    
    const [dataProductsDefault, setDataProductsDefault] = useState()
    let getProducts = localStorage.getItem('products')
    let products = JSON.parse(getProducts)


    useEffect(() => {
        productsDefault.get('').then(res => {
            setDataProductsDefault(res.data)
            localStorage.setItem('productsDefault', JSON.stringify(res.data))
        })
        getProducts = localStorage.getItem('products')
        products = JSON.parse(getProducts)
    }, [])


    return(
        <>
            {
                dataProductsDefault !== undefined ?
                dataProductsDefault.map((product, index) => (
                    <div className="cardProduct" key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.photo} alt="" width="auto" height="300px"/>
                        <h1>Preço: {product.price.toFixed(2)}</h1>
                        <h1>Categoria: {product.category}</h1>
                        <AddProductDefault index={`${index}`}/>
                    </div>
                )) : <h1>No momento não temos nenhum produto disponível. Em breve novidades!</h1>
            }
            {
                products !== undefined ?
                products.map((product, index) => (
                    <div className="cardProduct" key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.photo} alt="" width="auto" height="300px"/>
                        <h1>Preço: {product.price.toFixed(2)}</h1>
                        <h1>Categoria: {product.category}</h1>
                        <AddProductNew index={`${index}`}/>
                    </div>
                )) : ''
            }
        </>
    )
}