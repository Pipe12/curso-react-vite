import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Layout from '../../Components/Layout'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import Category from '../Clothes/Category'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/clothes', element: <Category /> },
    { path: '/electronics', element: <Category /> },
    { path: '/furniture', element: <Category /> },
    { path: '/toys', element: <Category /> },
    { path: '/others', element: <Category /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
