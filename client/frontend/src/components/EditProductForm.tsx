import { useState } from "react";
import type { Product } from "../types";

interface EditableProductProps {
  product: Product;
  onToggleEdit: () => void;
}

interface EditFormFields {
  target: {
    name: string;
    value: string | number;
  };
}

const EditProductForm = ({ product, onToggleEdit }: EditableProductProps) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    quantity: product.quantity,
  });


  const handleChange = (e: EditFormFields) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">{product.title}</label>
          <input
            type="text"
            id="product-name"
            name="title"
            value={formData.title}
            aria-label="Product Name"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">{product.price}</label>
          <input
            type="number"
            id="product-price"
            name="price"
            value={formData.price}
            aria-label="Product Price"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">{product.quantity}</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            aria-label="Product Quantity"
            onChange={handleChange}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onToggleEdit}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;
