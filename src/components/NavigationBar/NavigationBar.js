import CrwnLogo from '../../Assets/crown.svg'
import { Link } from 'react-router-dom';
import './navigation.styles.scss'
import { useContext,useState } from 'react';
import { Usercontext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/Firebase/Firebase.utils';
import CartIcon from '../cart-icon/Cart-icon.component';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component'
import Button from '../common/Button/Button.component';






const NavigationBar = () => {
  


  const {currentUser}=useContext(Usercontext)
  const {isCartOpen}=useContext(CartContext)



  
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img className="logo" src={CrwnLogo} alt='crown-logo'/>
        </Link>
       
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/orders" className="nav-link">
            ORDERS
          </Link>
          {
            currentUser? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ):(
              <Link to="/signin" className="nav-link">
            SIGN IN
          </Link>
            )
          }

          <CartIcon />
          
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

     

      
      
    </>
  );
};

export default NavigationBar;
