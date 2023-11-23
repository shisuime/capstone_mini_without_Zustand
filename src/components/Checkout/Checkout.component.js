import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../Checkout-item/Checkout-item.component"

import "./Checkout.styles.scss"

const Checkout= () => {
    const {cartItems , addItemToCart,removeItemToCart} = useContext(CartContext)

    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>

                </div>
                 <div className="header-block">
                 <span>Description</span>

                </div>
                 <div className="header-block">
                 <span>Quantity</span>

                </div>
                 <div className="header-block">
                 <span>Price</span>

                </div>
                 <div className="header-block">
                 <span>Remove</span>

                </div>

            </div>
            
            {cartItems.map((cartitem)=> (
                <CheckoutItem key={cartitem.id} cartitem={cartitem}/>
            ))}
            <span className="total">Total: 0</span>

        </div>
        
    )
}

export default Checkout