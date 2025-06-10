import Cart from "./Cart";
import type { CartProps } from "../types";

const Header = ({cart, dispatchCart}: CartProps) => {
  return (
    <header>
      <h1>The Shop!</h1>
        <Cart cart={cart} dispatchCart={dispatchCart} />
    </header>
  )
}

export default Header;
