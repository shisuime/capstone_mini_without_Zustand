import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


import './Checkout-item.styles.scss'

const CheckoutItem = ({cartitem})=>{
    
    const {name,imageUrl,price,quantity}=cartitem
    const{clearItemFromCart, addItemToCart,removeItemToCart}=useContext(CartContext)
    const clearItemHandler=()=>clearItemFromCart(cartitem)
    const addItemHandler=()=>addItemToCart(cartitem)
    const removeitemHandler=()=>removeItemToCart(cartitem)

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeitemHandler}>&#10094;</div>
            <span className='value'>{quantity}</span>
            
            <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>

        </div>
    )
}

export default CheckoutItem