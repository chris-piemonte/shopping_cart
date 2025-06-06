import EditableProduct from './EditableProduct';
import { getAllProducts } from "../services";
import { useEffect } from "react";
import type { Product } from '../types';

interface ProductsProps {
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}


const Products = ({ allProducts, setAllProducts }: ProductsProps) => {
  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    })();
  }, []);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul>
        {allProducts.map(product => {
          return(
            <EditableProduct key={product._id} product={product} />
          )
        })}
      </ul>
    </div>
  )
}

export default Products;
