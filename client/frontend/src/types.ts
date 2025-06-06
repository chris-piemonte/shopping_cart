export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

export interface Cart {
  productId: string,
}

export interface ProductsProps {
  products: Product[]
}

export interface AddProductFormProps {
  handleClick: (event: React.SyntheticEvent) => void;
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
