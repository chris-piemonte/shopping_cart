import { checkout } from "../services";
import type { CartProps } from "../types";

const Cart = ({cart, setCart}: CartProps) => {
  const handleCheckout = () => {
    checkout();
    setCart([]);
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => {
            return (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">Total: ${cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)}</td>
          </tr>
        </tfoot>
      </table>
      <div className="checkout-button">
        <button className="checkout" onClick={handleCheckout} disabled={cart.length === 0}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;
