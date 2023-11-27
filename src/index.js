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






const App=()=> {
  return (
    <div className='main-div'>
      
      <Hader />
      <NavigationBar />
      <Outlet />
      <Footer />

   
    </div>
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
      
      }

      

    ]


  },
])

const doc=document.getElementById('root')
const root = ReactDOM.createRoot(doc);
root.render(<RouterProvider router={appRouter} />)




