export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

interface SetInitialProducts {
  type: 'SET_INITIAL_PRODUCTS';
  products: Product[];
}

interface AddProduct {
  type: 'ADD_PRODUCT';
  res: Product;
}

interface DeleteProduct {
  type: 'DELETE_PRODUCT';
  deletedProductId: string;
}

interface UpdateProduct {
  type: 'UPDATE_PRODUCT',
  productId: string;
  res: Product;
}

interface ReduceProductQuantity {
  type: 'REDUCE_PRODUCT_QUANTITY';
  productId: string;
}

export type ProductsActions = SetInitialProducts | AddProduct | DeleteProduct | UpdateProduct | ReduceProductQuantity;

export interface NewProductProps {
  title: string;
  quantity: string;
  price: string;
}
export interface EditProductProps {
  title: string;
  quantity: number;
  price: number;
}

export interface ProductsProps {
  allProducts: Product[];
  dispatchProducts: React.ActionDispatch<[action: ProductsActions]>;
  dispatchCart: React.ActionDispatch<[action: CartActions]>;
}

export interface CartItem extends Product {
  productId: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

interface SetInitialCart {
  type: 'SET_INITIAL_CART';
  initialCart: CartItem[];
}

interface Checkout {
  type: 'CHECKOUT'
}

interface AddToCart {
  type: 'ADD_TO_CART';
  productId: string;
  product: CartItem;
}

export type CartActions = SetInitialCart | Checkout | AddToCart;

export interface CartProps {
  cart: CartItem[];
  dispatchCart: React.ActionDispatch<[action: CartActions]>;
}

export interface AddProductFormProps {
  handleClick: (event: React.SyntheticEvent) => void;
  dispatchProducts: React.ActionDispatch<[action: ProductsActions]>;
}

export interface AddProductProps {
  allProducts: Product[];
  dispatchProducts: React.ActionDispatch<[action: ProductsActions]>;
}

export interface CartResponse {
  product: {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    _v: number;
  },
  item: CartItem;
}

export interface EditableProductProps {
  product: Product;
  allProducts: Product[];
  dispatchProducts: React.ActionDispatch<[action: ProductsActions]>;
  dispatchCart: React.ActionDispatch<[action: CartActions]>;
}

export interface EditProductFormProps {
  product: Product;
  dispatchProducts: React.ActionDispatch<[action: ProductsActions]>;
  handleToggleEditForm: () => void; 
}
