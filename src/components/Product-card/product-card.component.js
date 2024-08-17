import "./product-card.styles.scss";
import Button from "../common/Button/Button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="full-product-card-container">
      <div className="product-card-container">
        <img
          src={imageUrl}
          style={{ border: "1px solid black" }}
          alt={`${name}`}
        />
        <div className="foter">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
