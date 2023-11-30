import './index.styles.scss'
import { UserProvider } from './contexts/user.context';
import { ProductsProviders } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Hader from './components/Hader/Hader';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Orders from './routes/Orders/Orders';
import Signin from './routes/Sign in/Signin';
import Checkout from './components/Checkout/Checkout.component';
import PaymentPage from './components/payment/payment.component';
// import { loadStripe } from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';
// import InjectCheckout from './components/Card/Cardcomponents';



// const stripePromise = loadStripe("pk_test_51OHriXSGdFiXBYjdjeMLSzdNbli6jgLctfAzsH6H3IWsgpmPkQLWUB1ajumRtopP3KsMFMAvgzhtO7Ml9zwEndEr00NngVbUlo"); 


const App=()=> {
  // console.log(stripePromise);
  return (
    <>
    {/* <div className='product'>
      <Elements stripe={stripePromise}>
        <InjectCheckout/>



      </Elements>

    </div> */}
    <div className='main-div'>
      
      <Hader />
      <NavigationBar />
      <Outlet />
      <Footer />

   
    </div>
    </>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<UserProvider>
      <ProductsProviders>
        <CartProvider>
        <App/>
        </CartProvider>
        </ProductsProviders>
      </UserProvider>,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/orders",
        element:<Orders/>
      },
      {
        path:"/signin",
        element:<Signin/>
      },
      {

        path:"/checkout",
      
        element:<Checkout/>
      
      },
      {

        path:"/payment",
      
        element:<PaymentPage/>
      
      },


      

    ]


  },
])

const doc=document.getElementById('root')
const root = ReactDOM.createRoot(doc);
root.render(<RouterProvider router={appRouter} />)




