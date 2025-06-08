export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

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
  products: Product[]
}

export interface CartItem extends Product {
  productId: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

export interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export interface AddProductFormProps {
  handleClick: (event: React.SyntheticEvent) => void;
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
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
