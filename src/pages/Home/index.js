
import Users from '../Users'
import Products from './components/Products'
import Main from './components/Main'
import Header from './components/Header'

export default function Home(){


    return(
        // <h1>Olá {props.nome}, sua idade é: {props.idade}</h1>
        <>
            <Header />
            <Main />
            <Products />
            
        </>
    )
}