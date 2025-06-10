import { useState } from "react";
import type { ProductsActions } from '../types'

const Sorting = ({ dispatchProducts }: {dispatchProducts: React.ActionDispatch<[action: ProductsActions]>}) => {
  const [sorting, setSorting] = useState({category: 'title', ascending: true});

  const handleSort = (category: 'title' | 'price' | 'quantity') => {
    return () => {
      setSorting({category: category, ascending: category === sorting.category ? !sorting.ascending : true})
      dispatchProducts({
        type: 'SORT_PRODUCTS',
        category: category,
        ascending: sorting.ascending,
      })
    }
  }

  return (
    <>
      {'Sort by: '}
      <button className="title" onClick={handleSort('title')}>Name</button>
      <button className="price" onClick={handleSort('price')}>Price</button>
      <button className="quantity" onClick={handleSort('quantity')}>Quantity</button>
    </>
  )
}

export default Sorting;
