import { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import RemoveItemCart from './remove'

export default function Cart(){

    const userName = localStorage.getItem('userNameActive')
    const userId = localStorage.getItem('userIdActive')
    const users = localStorage.getItem('users')
    const usersParse = JSON.parse(users)
    const [dataUserCart, setDataUserCart] = useState([])
    let qtdItemCart = localStorage.getItem('qtdItemCart')
    const history = useHistory()

    useEffect(() => {
        usersParse.map((user) => {
            if((user.id == userId) && (user.name == userName)){
                setDataUserCart(user.cart)
            }
        })
    }, [])

    function goHome(){
        history.push('/')
    }

    return(
        <>
            {
                qtdItemCart > 0 ? <h1>Total de itens no carrinho: {qtdItemCart} </h1> : <h1>Carrinho</h1>
            }
            {
                dataUserCart.length !== 0 ? 
                dataUserCart.map((item, index) => (
                    <div key={item.id}>
                        <img src={item.photo} alt="" width="auto" height="100px"/>
                        <h2 className="titleItem">{item.nameProduct}</h2>
                        <h3 className="titleItem">{item.priceProduct.toFixed(2)}</h3>
                        <RemoveItemCart index={`${index}`}/>
                    </div>
                ))
                : <h1>Você não possui produto no carrinho :(</h1>
            }
            <button className="btn-input" onClick={goHome}>Voltar para Home</button>
        </>
    )
}