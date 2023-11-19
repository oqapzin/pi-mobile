import axios from "axios";

const axiosConnect = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
})

export default axiosConnect