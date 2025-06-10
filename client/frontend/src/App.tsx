import { useEffect, useReducer } from 'react'
import { getAllProducts, getCart } from "./services";
import Products from './components/Products';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import type { CartActions, CartItem, Product, ProductsActions } from './types';

function productsReducer(allProducts: Product[], action: ProductsActions) {
  switch (action.type) {
    case 'SET_INITIAL_PRODUCTS':
      return action.products;
    case 'ADD_PRODUCT':
      return [...allProducts, action.res];
    case 'DELETE_PRODUCT':
      return allProducts.filter(product => product._id !== action.deletedProductId);
    case 'UPDATE_PRODUCT':
      return allProducts.map(item => item._id === action.productId ? action.res : item);
    case 'REDUCE_PRODUCT_QUANTITY':
      return allProducts.map(product => {
        if (product._id === action.productId) {
          return {...product, quantity: product.quantity - 1}
        } else {
          return product;
        }
      });
    case 'SORT_PRODUCTS': {
      let sortedProducts: Product[];
      if (action.category === 'title') {
        sortedProducts = [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.category === 'price') {
        sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
      } else if (action.category === 'quantity') {
        sortedProducts = [...allProducts].sort((a, b) => a.quantity - b.quantity);
      } else {
        throw Error('Unknown product action: ' + action.category);
      }

      if (action.ascending === false) sortedProducts.reverse();
      console.log(sortedProducts);
      return sortedProducts;
    }
    default:
      throw Error('Unknown product action: ' + (action as any).type);
  }
}

function cartReducer(cart: CartItem[], action: CartActions) {
  switch (action.type) {
    case 'SET_INITIAL_CART':
      return action.initialCart;
    case 'CHECKOUT':
      return [];
    case 'ADD_TO_CART':
      if(cart.find(cartItem => cartItem.productId === action.productId)) {
        return (cart.map(cartItem => {
          return cartItem.productId === action.productId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
      }))} else {
        return cart.concat(action.product);
      }
    default:
      throw Error('Unknown product action: ' + (action as any).type);
  }
}

function App() {
  const [allProducts, dispatchProducts] = useReducer(productsReducer, []);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  // set product state
  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      dispatchProducts({
        type: 'SET_INITIAL_PRODUCTS',
        products: products,
      });
    })();
  }, []);

  // set cart state
  useEffect(() => {
    (async () => {
      const initialCart = await getCart();
      dispatchCart({
        type: 'SET_INITIAL_CART',
        initialCart: initialCart,
      });
    })();
  }, []);
  
  return (
    <div id="app">
      <Header cart={cart} dispatchCart={dispatchCart} />
      <main>
        <Products allProducts={allProducts} dispatchProducts={dispatchProducts} dispatchCart={dispatchCart} />
        <AddProduct allProducts={allProducts} dispatchProducts={dispatchProducts} />
      </main>
    </div>
  )
}

export default App
