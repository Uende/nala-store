import { useEffect, useState } from "react";


export default function AddProductNew(props){

    const userName = localStorage.getItem('userNameActive')
    const userId = localStorage.getItem('userIdActive')
    const [dataProducts, setDataProducts] = useState()
    const [msg, setMsg] = useState(false)

    useEffect(() => {
        const products = localStorage.getItem('products')
        const productsParse = JSON.parse(products)
        setDataProducts(productsParse)
     }, [])
    


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
                alert('Registre-se ou faça login não administrativo para adicionar um produto ao seu carrinho')
            }
        })
    }

    return(
        <>
            <button className="btn" onClick={add}>Adicionar ao carrinho</button>
            {msg ? <h3>Produto adicionado ao carrinho</h3> : ''}
        </>
    )
}