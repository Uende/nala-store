import { useHistory } from 'react-router-dom'
import home from '../../../../images/home.png'
import user from '../../../../images/user.png'
import bag from '../../../../images/bag.png'
import './style.css';



export default function Header(){

    const history = useHistory()
    const userNameActive = localStorage.getItem('userNameActive')

    function goLoginOrRegister(){
        history.push('/users')
    }

    function goCart(){
        history.push('/cart')
    }

    function goHome(){
        history.push('/')
    }


    return(
        <header>
            
            <div className="logo"></div>
            <div className="menu">
                <div className="menu-item">
                    <img className="iconMenu" onClick={goHome} src={home} alt="iconHome" />
                    <h2 className="titleMenu" onClick={goHome}>Home</h2>
                </div>
            {
                userNameActive === null ? 
               <div className="menu-item">
                   <img className="iconMenu" onClick={goLoginOrRegister} src={user} alt="iconUser" />
                   <h2 className="titleMenu" onClick={goLoginOrRegister}><h3>Entrar ou cadastrar</h3></h2>
               </div> : 
               <div className="menu-item">
                   <img className="iconMenu" onClick={goLoginOrRegister} src={user} alt="iconUser" />
                   <h2 className="titleMenu" onClick={goLoginOrRegister}>Olá, {userNameActive}</h2>
               </div>
            }
                <div className="menu-item">
                    <img className="iconMenu" onClick={goLoginOrRegister} src={bag} alt="iconUser" />
                    <h2 className="titleMenu" onClick={goCart}>Carrinho</h2>
                </div>
            </div>
        </header>
    )
}