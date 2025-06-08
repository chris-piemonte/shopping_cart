import Cart from "./Cart";
import type { CartProps } from "../types";

const Header = ({cart, setCart}: CartProps) => {
  return (
    <header>
      <h1>The Shop!</h1>
        <Cart cart={cart} setCart={setCart} />
    </header>
  )
}

export default Header;
