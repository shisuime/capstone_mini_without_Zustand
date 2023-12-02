import paymentoptionsLogo from'../../Assets/paymentoptions.svg'
import sellLogo from '../../Assets/sell.svg'
import helpcenterLogo from '../../Assets/helpcenter.svg'
import giftssLogo from '../../Assets/giftss.svg'
import'./Footer.scss'



const Footer=()=>{
    return(
        <>
        <div className="Footer">
            <p className="footers">About Us</p>
            <h4 className='contact'>Contact Us - +918831310646</h4>
            <h5 className='email'>Email - royalcrown@gmail.com</h5>
            <h6 className='company'>Company Information</h6>
            {/* <h7 className='careers'>Careers</h7> */}
         
            
        </div>

        <div className='HelpSections'>
        <p className='help'>Help</p>
            <h4 className='payment'>Payments</h4>
            <h5 className='shipping'>Shipping</h5>
            <h6 className='cancellation'>Cancellation</h6>
        </div>

        <div className='socialmedia'>
            <p className='social'>Social</p>
            <h4 className='facebook'>Facebook</h4>
            <h5 className='twitter'>Twitter</h5>
            <h6 className='instragram'>Instragram</h6>
        </div>
       

        

        <div className='paymentimage'>
            <img className='card' src={sellLogo} alt='sell-logo'></img>
            <img className='helpcenters' src={helpcenterLogo} alt='helpcenter-logo'></img>
            <img className='giftsss' src={giftssLogo} alt='giftss-logo'></img>
            <img  className= 'paymensecticon' src={paymentoptionsLogo} alt='payments-logo'></img>
            
            
        </div>

        <div className='all'>
        <h6 className='gift'>Become a Seller</h6>
        <h4 className='center'>help center</h4>
        <h5 className='Gift'>GiftCard</h5>
        </div>



       
      </>
    )
}


export default Footer