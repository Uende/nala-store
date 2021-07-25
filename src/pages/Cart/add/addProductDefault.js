import { useEffect, useState } from "react";


export default function AddProductDefault(props){

    const userName = localStorage.getItem('userNameActive')
    const userId = localStorage.getItem('userIdActive')
    const [dataProducts, setDataProducts] = useState()
    const [msg, setMsg] = useState(false)

    useEffect(() => {
        const productsDefault = localStorage.getItem('productsDefault')
        const productsDefaultParse = JSON.parse(productsDefault)
        // const products = localStorage.getItem('products')
        // const productsParse = JSON.parse(products)
        setDataProducts(productsDefaultParse)
    // if(products !== null){
    //     //setDataProducts(...productsDefaultParse, productsParse)
    //     console.log(products)
    //     productsParse.map(() => {

    //     })
    //    // console.log(productsParse)
    // }else{
    //     //setDataProducts(productsDefaultParse)
    // }
     }, [])
    console.log(dataProducts)
    


    function add(){
        const users = localStorage.getItem('users')
        const usersParse = JSON.parse(users)
        const product = dataProducts[props.index]
        let existUser = false
        let ID = new Date().getMilliseconds()
        console.log("Product addCart")
        console.log(product)
        usersParse.map((user) => {
            if((user.id == userId) && (user.name == userName)){
                existUser = true
                user.cart?.push({
                    "id": `${ID}`,
                    "photo": product.photo,
                    "idProduct": product.id,
                    "nameProduct": product.name,
                    "priceProduct": product.price
                })
                localStorage.setItem('users', JSON.stringify(usersParse))
                localStorage.setItem('qtdItemCart', user.cart?.length)
                setMsg(true)
                setTimeout(() => {
                    setMsg(false)
                }, 1000)
            }
            
            if(existUser == false){
                alert('Registre-se ou faça login para adicionar um produto ao seu carrinho')
            }
        })
    }

    return(
        <>
            <button className="btn-cart" onClick={add}>Adicionar ao carrinho</button>
            {msg ? <h3>Produto adicionado ao carrinho</h3> : ''}
        </>
    )
}