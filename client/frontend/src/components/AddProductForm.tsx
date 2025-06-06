import { useState } from "react";
import type { AddProductFormProps } from "../types"
import { addProduct } from "../services";

interface EditableFormFields {
  target: {
    name: string;
    value: string | number;
  };
  preventDefault: () => void;
}

export interface NewProduct {
  title: string;
  quantity: string;
  price: string;
}

const AddProductForm = ({handleClick, allProducts, setAllProducts}: AddProductFormProps) => {
  const [formFields, setFormFields] = useState(
    {
      "product-name": '',
      "product-price": '',
      "product-quantity": '',
    }
  )

  const handleChange = (e: EditableFormFields) => {
    const { name, value } = e.target;
    setFormFields(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newProduct: NewProduct = {
      "title": formFields["product-name"],
      "price": formFields["product-price"],
      "quantity": formFields["product-quantity"],
    }

    const res = await addProduct(newProduct);
    setAllProducts(allProducts.concat(res));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-price">Price:</label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          min="0"
          step="0.01"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-quantity">Quantity:</label>
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          min="0"
          onChange={handleChange}
          required
        />
      </div>
      <div className="actions form-actions">
        <button type="submit">Add</button>
        <button type="button" onClick={handleClick}>Cancel</button>
      </div>
    </form>
  )
}

export default AddProductForm;
