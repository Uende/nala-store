import { useEffect, useState } from "react";


export default function RemoveItemCart(props){

    const userName = localStorage.getItem('userNameActive')
    const userId = localStorage.getItem('userIdActive')
    const users = localStorage.getItem('users')
    const usersParse = JSON.parse(users)


    function remove(){
        if(usersParse !== null){
            usersParse.map((user) => {
                if((user.id == userId) && (user.name == userName)){
                    user.cart?.splice(props.index, 1)
                    localStorage.setItem('users', JSON.stringify(usersParse))
                    localStorage.setItem('qtdItemCart', user.cart?.length)
                    window.location.reload()
                }
            })
        }
    }
    

    return(
        <>
            <button className="btn" onClick={remove}>Remover ao carrinho</button>
        </>
    )
}