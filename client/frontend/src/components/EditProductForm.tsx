import { useState } from "react";
import { updateProduct } from "../services";
import type { Product } from "../types";
import type { EditProductProps } from "../types";

interface EditableProductProps {
  allProducts: Product[];
  product: Product;
  handleToggleEditForm: () => void;
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface EditFormFields {
  target: {
    name: string;
    value: string | number;
  };
}

const EditProductForm = ({ allProducts, product, setAllProducts, handleToggleEditForm }: EditableProductProps) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    quantity: product.quantity,
  });


  const handleChange = (e: EditFormFields) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const updatedProduct: EditProductProps = {
      "title": formData["title"],
      "price": formData["price"],
      "quantity": formData["quantity"],
    }

    const res = await updateProduct(product._id, updatedProduct);
    handleToggleEditForm();
    setAllProducts(allProducts.map(item => item._id === product._id ? res : item)); 
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">{'Product'}</label>
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
          <label htmlFor="product-price">{'Price'}</label>
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
          <label htmlFor="product-quantity">{'Quantity'}</label>
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
          <button type="button" onClick={handleToggleEditForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;
