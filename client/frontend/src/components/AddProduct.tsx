import { useState } from "react";
import AddProductForm from "./AddProductForm";
import type { Product } from "../types";

interface ProductsProps {
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const AddProduct = ({ allProducts, setAllProducts }: ProductsProps) => {
  const [displayForm, setDisplayForm] = useState(false)

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    return setDisplayForm(!displayForm);
  }

  {
    if (displayForm) {
      return (
        <AddProductForm handleClick={ handleClick } allProducts={allProducts} setAllProducts={setAllProducts} />
      )
    } else {
      return (
        <p>
          <button className="add-product-button" onClick={ handleClick }>Add A Product</button>
        </p>
      )
    }
  }
}

export default AddProduct;
