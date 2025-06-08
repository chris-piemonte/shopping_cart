import { useState } from 'react'
import type { Product, CartItem, CartResponse } from "../types";
import EditProductForm from './EditProductForm';
import { deleteProduct, addToCart } from '../services';

interface EditableProductProps {
  product: Product;
  allProducts: Product[];
  cart: CartItem[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const EditableProduct = ({ product, allProducts, setAllProducts, cart, setCart }: EditableProductProps) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleToggleEditForm = () => {
    setEditProduct(!editProduct);
  }

  const handleDeleteProduct = () => {
    const deletedProduct = product._id;
    deleteProduct(deletedProduct);
    setAllProducts(allProducts.filter(product => product._id !== deletedProduct));
  }

  const updateCart = (res: CartResponse) => {
    if(cart.find(cartItem => cartItem.productId === res.item.productId)) {
      setCart(cart.map(cartItem => {
        return cartItem.productId === product._id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
      }));
    } else {
      setCart(cart.concat(res.item));
    }
  }

  const updateProducts = (res: CartResponse) => {
    setAllProducts(allProducts.map(product => {
      if (product._id === res.item.productId) {
        return {...product, quantity: product.quantity - 1}
      } else {
        return product;
      }
    }));
  }

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
      {editProduct ? (<EditProductForm allProducts={allProducts} setAllProducts={setAllProducts} product={product} handleToggleEditForm={handleToggleEditForm} />) : null}
    </li>
  )
}

export default EditableProduct;
