import RemoveUser from './remove'
import './style.css'


export default function ShowUsers(){

    const users = localStorage.getItem('users')
    const usersParse = JSON.parse(users)

    

    return(
        <>
            <div className="cardUsers">
                <div className="showUsers">
                {
                    usersParse !== null ? 
                    usersParse.map((user, index) => (
                        <div key={user.id}>
                            <h1>Nome: {user.name}</h1>
                            <h1>ID: {user.id}</h1>
                            <h1>Email: {user.email}</h1>
                            <h1>Endereço: {user.address}</h1>
                            <h1>CEP: {user.cep}</h1>
                            <h1>UF: {user.uf}</h1>
                            <RemoveUser index={`${index}`}/>
                        </div>
                    )) : <h1 className="titleAdm">Não existe nenhum usuário cadastrado </h1>
                }
                </div>
            </div>
        </>
    )
}