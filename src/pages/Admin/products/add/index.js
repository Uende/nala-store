import React, { useState } from 'react';


export default function RegisterProduct(){


    const [name, setName] = useState()
    const [id, setId] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState()
    const [photo, setPhoto] = useState('')
    const [qtd, setQtd] = useState('')


    function register(){
        
        const products = localStorage.getItem('products')
        const productsParse = JSON.parse(products)
            
        let existId = 0

        if(productsParse !== null){
            productsParse.map((user) => {
                user.id == id ? existId += 1 : existId = existId
            })
        }

        if((name != '') && (existId == 0) && (price >= 1) && (photo != '') && (qtd >= 0) && (category != '')){
            const dataProduct = {
                "id": `${id}`,
                "name": name,
                "price": price,
                "photo": photo,
                "category": category,
                "qtd" : qtd, 
            }
            
            if(products !== null){
                localStorage.setItem(`products`, JSON.stringify([...productsParse, dataProduct]))
            }else{
                localStorage.setItem(`products`, JSON.stringify([dataProduct]))
            }

            alert('Cadastro realizado com sucesso!')
            window.location.reload()

        }else if(existId > 0){
            alert('Esse código de identificação já existe')

        }else{
            alert('Preencha todos os campos corretamente')
        }
    }

    return(
        <div className="register">
            <h1 className="title">Cadastro</h1>

            <input className="input" type="number" placeholder='Código de identificação' onChange={e => setId(e.target.valueAsNumber)} required/>
            <input className="input" type="text" placeholder='Nome do produto' onChange={e => setName(e.target.value)} required/>
            <input className="input" type="text" placeholder='URL da imagem' onChange={e => setPhoto(e.target.value)} required/>
            <input className="input" type="number" placeholder='Preço do produto' onChange={e => setPrice(e.target.valueAsNumber)} required/>
            <input className="input" type="number" placeholder='Quantidade' onChange={e => setQtd(e.target.valueAsNumber)} required/>
            <select  onChange={e => setCategory(e.target.value)} required>
                    <option value="">Selecione a categoria do produto</option>
                    <option value="Vestido">Vestido</option>
                    <option value="Blusa">Blusa</option>
                    <option value="Conjunto">Conjunto</option>
                    <option value="Short">Short</option>
                </select>
            <input className="btn-input" type="submit" value="Cadastrar" onClick={register}/>
        </div>
    )
}

