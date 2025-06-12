import { z } from 'zod';

export const ProductSchema = z.object({
  _id: z.string().min(1),
  title: z.string().min(1),
  quantity: z.number().min(0),
  price: z.number().min(0),
});

export const CartItemSchema = ProductSchema.extend({
  productId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  _v: z.number(),
});

export const NewProductPropsSchema = z.object({
  title: z.string().min(1),
  quantity: z.string().min(1),
  price: z.string().min(1),
});

export const EditProductPropsSchema = z.object({
  title: z.string(),
  quantity: z.number(),
  price: z.number(),
});

export const CartResponseSchema = z.object({
  product: ProductSchema.extend({
    createdAt: z.string(),
    updatedAt: z.string(),
    _v: z.number(),
  }),
  item: CartItemSchema,
});

export type Product = z.infer<typeof ProductSchema>;
export type CartItem = z.infer<typeof CartItemSchema>;
export type NewProductProps = z.infer<typeof NewProductPropsSchema>;
export type EditProductProps = z.infer<typeof EditProductPropsSchema>;
export type CartResponse = z.infer<typeof CartResponseSchema>;

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

interface SortProducts {
  type: 'SORT_PRODUCTS';
  category: 'title' | 'price' | 'quantity';
  ascending: boolean;
}

export type ProductsActions = SetInitialProducts | AddProduct | DeleteProduct | UpdateProduct | ReduceProductQuantity | SortProducts;

export interface ProductsProps {
  allProducts: Product[];
  dispatchProducts: React.ActionDispatch<[action: ProductsActions]>;
  dispatchCart: React.ActionDispatch<[action: CartActions]>;
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
