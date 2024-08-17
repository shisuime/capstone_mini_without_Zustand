import "./Cart-dropdown.styles.scss";
import Button from "../common/Button/Button.component";
import CartItem from "../cart-item/Cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
// import { Margin } from "@mui/icons-material";

const CartDropdown = ({ currentUser }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-contaier">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} CartItem={item} />
          ))}
        </div>
      </div>

      <Link to={currentUser ? "/checkout" : "/"}>
        <div className="checkout-button-container">
          <Button>GO TO CHECKOUT</Button>
        </div>
      </Link>
    </div>
  );
};

export default CartDropdown;
