import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Logout from '../../Users/logout';

export default function LoginAdmin(){

    const user = localStorage.getItem('userNameActive')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()

    function login(){        

        
        if((email === "admin@gmail.com") && (password == "123456admin")){
                localStorage.setItem('userNameActive', "Admin")
                localStorage.setItem('userIdActive', "205")
                alert('Login realizado com sucesso')
                history.push('/admin')
        }else{
            alert('E-mail ou senha incorreto')
        }    
    }


    return(
        <div className="login">
            {
                user == null ?
                <div>
                    <h1 className="title">Login</h1>
                    <input className="input" type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                    <input className="input" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />

                    <input className="btn-input" type="submit" value="Entrar" onClick={login} />
                </div>
                : <h1 className="title">Você está logado em uma conta comum, deseja sair? <Logout /></h1>
            } 
        </div>
    )
}