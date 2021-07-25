
import Users from '../Users'
import Products from './components/Products'
import Header from './components/Header'


export default function Home(props){


    return(
        // <h1>Olá {props.nome}, sua idade é: {props.idade}</h1>
        <>
            <Header />
            <br />
            <Products />
        </>
    )
}