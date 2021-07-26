import axios from 'axios'

const PRODUCTSDEFAULT = axios.create({
        baseURL: "https://my-json-server.typicode.com/Uende/nala-store/productsDefault"
})


export default PRODUCTSDEFAULT
