import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../Checkout-item/Checkout-item.component"
import Button from '../common/Button/Button.component'


import "./Checkout.styles.scss"

const Checkout= () => {
    const {cartItems,carttotal } = useContext(CartContext)

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
            <Button>Checkout</Button>
            <span className="total">Total: ${carttotal}</span>

        </div>
        
    )
}

export default Checkout