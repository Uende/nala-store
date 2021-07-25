import { useHistory } from "react-router"

export default function Header(){

    let qtdItemCart = localStorage.getItem('qtdItemCart')
    const userNameActive = localStorage.getItem('userNameActive')
    const history = useHistory()

    function goLoginOrRegister(){
        history.push('/users')
    }

    return(
        <header>
            {
                userNameActive === null ? 
               <div>
                   <h1 onClick={goLoginOrRegister}><h3>Entrar ou cadastrar</h3></h1>
               </div> : 
               <div>
                   <h1 onClick={goLoginOrRegister}>Olá, {userNameActive}</h1>
               </div>
            }
        </header>
    )
}