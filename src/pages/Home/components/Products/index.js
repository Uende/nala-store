import React, { useState, useEffect } from 'react';
import productsDefault from '../../../../api/products';
import AddProductDefault from '../../../Cart/add/addProductDefault'
import AddProductNew from '../../../Cart/add/addProductNew'
import './style.css';
import axios from 'axios'


export default function Produtos(){
    
    const [dataProductsDefault, setDataProductsDefault] = useState()
    let getProducts = localStorage.getItem('products')
    let products = JSON.parse(getProducts)

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Uende/nala-store/productsDefault').then(res => {
            setDataProductsDefault(res.data)
            localStorage.setItem('productsDefault', JSON.stringify(res.data))
        })
        getProducts = localStorage.getItem('products')
        products = JSON.parse(getProducts)
    }, [])


    return(
        <>
                
            <h1 className="title">Produtos</h1>      
          
            <div className="products">
            {
                dataProductsDefault !== null ?
                dataProductsDefault.map((product, index) => (
                    <div className="cardProduct" key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.photo} alt=""/>
                        <h2>Preço: {product.price.toFixed(2)}</h2>
                        <h3>Categoria: {product.category}</h3>
                        <AddProductDefault index={`${index}`}/>
                    </div>
                )) : <h1>No momento não temos nenhum produto disponível. Em breve novidades!</h1>
            }
            {
                products !== null ?
                products.map((product, index) => (
                    <div className="cardProduct" key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.photo} alt="" width="auto" height="300px"/>
                        <h2>Preço: {product.price.toFixed(2)}</h2>
                        <h3>Categoria: {product.category}</h3>
                        <AddProductNew index={`${index}`}/>
                    </div>
                )) : ''
            }
            </div>
        </>
    )
}