import { useState, useEffect } from 'react'
import { getAllProducts, getCart } from "./services";
import Products from './components/Products';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import type { Product, CartItem } from './types';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // set product state
  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    })();
  }, []);

  // set cart state
  useEffect(() => {
    (async () => {
      const initialCart = await getCart();
      setCart(initialCart);
    })();
  }, []);
  
  return (
    <div id="app">
      <Header cart={cart} setCart={setCart} />
      <main>
        <Products allProducts={allProducts} setAllProducts={setAllProducts} cart={cart} setCart={setCart} />
        <AddProduct allProducts={allProducts} setAllProducts={setAllProducts} />
      </main>
    </div>
  )
}

export default App
