
import Login from './login'
import Logout from './logout'
import Register from './register'
import { useHistory } from 'react-router';
import './style.css'
import Header from '../Home/components/Header'

export default function Users(){

    const userNameActive = localStorage.getItem('userNameActive')
    const history = useHistory()

    return(
        <>
            <Header />
            <br />
            <br />
            {
                userNameActive === null ? 
                <div className="User">
                    <Login />
                    <h1 className="ou">Ou</h1>
                    <Register />
                </div>
                : 
                <div className="User">
                    <h1 className="title">Olá, {userNameActive}</h1>
                    <h2 className="titleAdm">Deseja sair? <br /> <Logout/> </h2>
                </div>
            }
            <br />

        </>
    )
} 