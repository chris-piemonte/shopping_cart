import axios from 'axios';
import type { Product, NewProductProps, EditProductProps, CartItem, CartResponse } from './types';

const baseUrl = "http://localhost:5001/api";

export const getAllProducts = async () => {
  const res = await axios.get<Product[]>(`${baseUrl}/products`);
  return res.data;
}

export const addProduct = async (product: NewProductProps) => {
  const res = await axios.post<Product>(`${baseUrl}/products`, product);
  return res.data;
}

export const updateProduct = async (productId: string, product: EditProductProps) => {
  const res = await axios.put<Product>(`${baseUrl}/products/${productId}`, product);
  return res.data;
}

export const deleteProduct = async (productId: string) => {
  await axios.delete<void>(`${baseUrl}/products/${productId}`);
}

export const getCart = async () => {
  const res = await axios.get<CartItem[]>(`${baseUrl}/cart`);
  return res.data;
}

export const checkout = async () => {
  await axios.post<void>(`${baseUrl}/checkout`);
}

export const addToCart = async (productId: string) => {
  const res = await axios.post<CartResponse>(`${baseUrl}/add-to-cart`, {productId: productId})
  return res.data;
}
