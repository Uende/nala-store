import './style.css';
import model from '../../../../images/model.png'

export default function Main(){
    return(
        <div className="main">
            <div className="main-article">
                <h1>As roupas que combinam com a sua coroa</h1>
                <h2>Amor, moda, cuidado e carinho - A’nala</h2>
                <button>Quero ver os produtos</button>
            </div>
            <div className="main-image">
                <img className="main-image" src={model} alt="" />
            </div>
        </div>
    )
}