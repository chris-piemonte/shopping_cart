import { useState } from 'react'
import type { Product } from "../types";
import EditProductForm from './EditProductForm';

interface EditableProductProps {
  product: Product;
}

const EditableProduct = ({ product }: EditableProductProps) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleClick = () => {
    return setEditProduct(!editProduct);
  }

  return (
    <li key={product._id} className="product">
      <div className="product-details">
        <h3>{ product.title }</h3>
        <p className="price">{ product.price }</p>
        <p className="quantity">{ product.quantity } left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleClick}>Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
      {editProduct ? (<EditProductForm product={product} onToggleEdit={handleClick} />) : null}
    </li>
  )
}

export default EditableProduct;
