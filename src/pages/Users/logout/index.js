
export default function Logout(){

    function logout(){
        localStorage.removeItem('userNameActive')
        localStorage.removeItem('userIdActive')
        localStorage.removeItem('qtdItemCart')
        window.location.reload()
    }

    return(
        <button className="btn-input" onClick={logout}>Sair</button>
    )
}