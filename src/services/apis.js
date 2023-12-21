import api from "./config"

export const getAllProduct = () => api.get('products')

export const sortProduct = (method) => api.get(`products?sort=${method}`)

export const categorisedProduct = (category) => api.get(`products/category/${category}`)

export const getSingleProduct = (id) => api.get(`products/${id}`)