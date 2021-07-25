
import Login from './login'
import Logout from './logout'
import Register from './register'
import { useHistory } from 'react-router';

export default function Users(){

    const userNameActive = localStorage.getItem('userNameActive')
    const history = useHistory()

    function goHome(){
        history.push('/')
    }

    return(
        <>
            {
                userNameActive === null ? 
                <div className="User">
                    <Login />
                    <h1>OU</h1>
                    <Register />
                </div>
                : 
                <div className="User">
                    <h1>Olá, {userNameActive}</h1>
                    <h2>Deseja sair? <Logout/> </h2>
                </div>
            }
            <br />
            <button className="btn-input" onClick={goHome}>Voltar para Home</button>

        </>
    )
} 