import { useState } from 'react'
import type { EditableProductProps, CartResponse } from "../types";
import EditProductForm from './EditProductForm';
import { addToCart } from '../services';

const EditableProduct = ({ product, allProducts, dispatchProducts, dispatchCart }: EditableProductProps) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleToggleEditForm = () => {
    setEditProduct(!editProduct);
  }

  const handleDeleteProduct = () => {
    const deletedProductId = product._id;
    dispatchProducts({
      type: 'DELETE_PRODUCT',
      deletedProductId: deletedProductId,
    });
  }

  const updateCart = (res: CartResponse) => {
    dispatchCart({
      type: 'ADD_TO_CART',
      productId: res.item.productId,
      product: res.item,
    });
  }

  const updateProducts = (res: CartResponse) => {
    dispatchProducts({
      type: 'REDUCE_PRODUCT_QUANTITY',
      productId: res.item.productId
    });
  };

  const handleAddToCart = async () => {
    const res = await addToCart(product._id);
    updateCart(res);
    updateProducts(res);
  }

  return (
    <li key={product._id} className="product">
      <div className="product-details">
        <h3>{ product.title }</h3>
        <p className="price">${ product.price }</p>
        <p className="quantity">{ product.quantity } left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart} disabled={editProduct || product.quantity === 0}>Add to Cart</button>
          <button className="edit" onClick={handleToggleEditForm} disabled={editProduct}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDeleteProduct}><span>X</span></button>
      </div>
      {editProduct ? (<EditProductForm dispatchProducts={dispatchProducts} product={product} handleToggleEditForm={handleToggleEditForm} />) : null}
    </li>
  )
}

export default EditableProduct;
