import axios from 'axios'

const PRODUCTSDEFAULT = axios.create({
        baseURL: "http://localhost:8080/productsDefault"
})


export default PRODUCTSDEFAULT