import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemService = (token, data) => axios.post(`${BASE_URL}/users`, data, {headers: {Authorization: `Bearer ${token}`}})

export {
    getAllItemsService,
    getOneItemService,
    createItemService
}