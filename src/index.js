import './index.styles.scss'
import { UserProvider } from './contexts/user.context';
import { CategoriesProviders } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Orders from './routes/Orders/Orders';
import Signin from './routes/Sign in/Signin';
import Checkout from './components/Checkout/Checkout.component';
import PaymentPage from './components/payment/payment.component';
import DirectoryItem from './components/Directory-item/Directory-item.component';



const App=()=> {
  
  return (
    <>
    
    <div className='main-div'>
      
      <Header />
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
      <CategoriesProviders>
        <CartProvider>
        <App/>
        </CartProvider>
        </CategoriesProviders>
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
      {

        path:"/shop/:category",
      
        element:<DirectoryItem/>
      
      },



      

    ]


  },
])

const doc=document.getElementById('root')
const root = ReactDOM.createRoot(doc);
root.render(<RouterProvider router={appRouter} />)




