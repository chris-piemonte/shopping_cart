import EditableProduct from './EditableProduct';
import type { CartItem, Product } from '../types';
import type React from 'react';

interface ProductsProps {
  allProducts: Product[];
  cart: CartItem[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}


const Products = ({ allProducts, setAllProducts, cart, setCart }: ProductsProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul>
        {allProducts.map(product => {
          return(
            <EditableProduct key={product._id} allProducts={allProducts} product={product} setAllProducts={setAllProducts} cart={cart} setCart={setCart} />
          )
        })}
      </ul>
    </div>
  )
}

export default Products;
