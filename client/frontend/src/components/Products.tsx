import EditableProduct from './EditableProduct';
import type { ProductsProps } from '../types';


const Products = ({ allProducts, dispatchProducts, dispatchCart }: ProductsProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
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
