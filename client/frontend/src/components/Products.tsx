import EditableProduct from './EditableProduct';
import Sorting from './Sorting';
import { ThemeContext } from '../context/ThemeContext';
import { CurrencyContext } from '../context/CurrencyContext';
import type { ProductsProps } from '../types';
import { useContext } from 'react';


const Products = ({ allProducts, dispatchProducts, dispatchCart }: ProductsProps) => {
  const { toggleTheme } = useContext(ThemeContext)
  const { toggleCurrency } = useContext(CurrencyContext)
  return (
    <div className="product-listing">
      <button onClick={toggleTheme}>Change Theme</button>
      <button onClick={toggleCurrency}>Change Currency</button>
      <h2>Products</h2>
      <Sorting dispatchProducts={dispatchProducts} />
      <ul>
        {allProducts.map(product => {
          return(
            <EditableProduct key={product._id} allProducts={allProducts} product={product} dispatchProducts={dispatchProducts} dispatchCart={dispatchCart} />
          )
        })}
      </ul>
    </div>
  )
}

export default Products;
