import axios from 'axios';
import type { NewProduct } from './components/AddProductForm';

const baseUrl = "http://localhost:5001/api";

export const getAllProducts = async () => {
  const res = await axios.get(`${baseUrl}/products`);
  return res.data;
}

export const addProduct = async (product: NewProduct) => {
  const res = await axios.post(`${baseUrl}/products`, product);
  return res.data;
}
