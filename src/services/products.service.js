import axios from "axios";

const base_url = 'https://fakestoreapi.com/products';

export const getProductsService = async () => await axios.get(`${base_url}`);