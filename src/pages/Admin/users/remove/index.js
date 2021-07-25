import { useEffect, useState } from "react";


export default function RemoveUser(props){

    const users = localStorage.getItem('users')
    const usersParse = JSON.parse(users)


    function remove(){
        usersParse.map((user, index) => {
            if(index == props.index){
                usersParse.splice(props.index, 1)
                localStorage.setItem('users', JSON.stringify(usersParse))
                window.location.reload()
            }
        })
    }
    

    return(
        <>
            <button className="btn-cart" onClick={remove}>Remover usuário</button>
        </>
    )
}