import React, { useState } from 'react';


export default function RegisterUser(){


    const [name, setName] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState()
    const [cep, setCep] = useState('')
    const [uf, setUf] = useState('')



    function register(){
        const ID = new Date().getMilliseconds()
        
        const users = localStorage.getItem('users')
        const usersParse = JSON.parse(users)
            
            let existUser = 0
            if(usersParse !== null){
                usersParse.map((user) => {
                    user.email == email ? existUser += 1 : existUser = existUser
                })
            }

        if((name != '') && (existUser == 0) && (email.length >= 13) && (email.includes('@')) && (password.length >= 6) && (address != '') && (cep.length == 8) && (uf.length == 2)){
            const dataUser = {
                "id": `${ID}`,
                "name": name,
                "email": email,
                "password": password,
                "address": address,
                "cep" : cep, 
                "uf": uf.toLocaleUpperCase(),
                "cart": []
            }
            
            if(users !== null){
                localStorage.setItem(`users`, JSON.stringify([...usersParse, dataUser]))
            }else{
                localStorage.setItem(`users`, JSON.stringify([dataUser]))
            }

            alert('Cadastro realizado com sucesso!')
            window.location.reload()

        }else if(existUser > 0){
            alert('Esse e-mail já foi cadastrado')

        }else{
            alert('Preencha todos os campos corretamente')
        }
    }

    return(
        <div className="register">
            <h1>Cadastro</h1>

            <input className="input" type="text" placeholder='Nome completo' onChange={(e) => setName(e.target.value)} required  />
            <input className="input" type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} required />
            <input className="input" type="password" placeholder='Senha - *Minímo de 6 caracteres' onChange={(e) => setPassword(e.target.value)} required minLength="6"/>
            <input className="input" type="text" placeholder='Endereço' onChange={(e) => setAddress(e.target.value)} required />
            <input className="input" type="number" placeholder='CEP' onChange={(e) => setCep(e.target.value)} required />
            <input className="input" type="text" placeholder='UF' onChange={(e) => setUf(e.target.value)} required />
            <input className="btn" type="submit" value="Cadastrar" onClick={register}/>
           
        </div>
    )
}