import { useState } from "react";
import AddProductForm from "./AddProductForm";
import type { AddProductProps } from "../types";

const AddProduct = ({ allProducts, dispatchProducts }: AddProductProps) => {
  const [displayForm, setDisplayForm] = useState(false)

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    return setDisplayForm(!displayForm);
  }

  {
    if (displayForm) {
      return (
        <AddProductForm handleClick={ handleClick } dispatchProducts={dispatchProducts} />
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
