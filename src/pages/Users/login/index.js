import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Logout from '../logout'

export default function Login(){

    const user = localStorage.getItem('userNameActive')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    let existUser = false

    function login(){
        const users = localStorage.getItem('users')
        const usersParse = JSON.parse(users)
        

        usersParse.map((user) => {
            if((user.email == email) && (user.password == password)){
                existUser = true
                localStorage.setItem('userNameActive', user.name)
                localStorage.setItem('userIdActive', user.id)
            }
        })

        if(existUser){
            alert('Login realizado com sucesso')
            history.push('/')
            
        }else{
            alert('E-mail ou senha incorreto')
        }    
    }

    function goAdmin(){
        history.push('/admin')
    }


    return(
        <div>
            {
                user == null ?
                <div className="login">
                    <h1>Login</h1>
                    <input className="input" type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                    <input className="input" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />

                    <input className="btn" type="submit" value="Entrar" onClick={login} />
                    <br />
                    <h1 className="titleAdm" onClick={goAdmin}>Ir para acesso administrativo?</h1>
                </div>
                : <h1 className="title">Você já está logado, deseja sair? <Logout /></h1>
            } 
        </div>
    )
}