import { useState } from 'react'
import Products from './components/Products';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import type { Product } from './types';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  
  return (
    <div id="app">
      <Header />
      <main>
        <Products allProducts={allProducts} setAllProducts={setAllProducts} />
        <AddProduct allProducts={allProducts} setAllProducts={setAllProducts} />
      </main>
    </div>
  )
}

export default App
