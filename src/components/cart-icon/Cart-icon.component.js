import './Cart-icon.styles.scss'
import CartLogo from '../../Assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartIcon = () =>{

    const {setIsCartOpen,isCartOpen,cartCount}=useContext(CartContext)
    

    const toggleIsCartOpen =()=>{setIsCartOpen(!isCartOpen)}
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>  
            <div className='shopping-icon'>
            <img className="cart-icon" src={CartLogo} alt='cart-logo'/>
            </div>
            <span className='item-count'>{cartCount}</span>
            
        </div>
    )
}

export default CartIcon