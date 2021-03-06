import { useEffect, useState } from "react";


export default function RemoveProduct(props){

    const products = localStorage.getItem('products')
    const productsParse = JSON.parse(products)


    function remove(){
        if(productsParse !== null){
            productsParse.map((product, index) => {
                if(index == props.index){
                    productsParse.splice(props.index, 1)
                    localStorage.setItem('products', JSON.stringify(productsParse))
                    window.location.reload()
                }
            })
        }
    }
    

    return(
        <>
            <button className="btn-cart" onClick={remove}>Remover produto</button>
        </>
    )
}