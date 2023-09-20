import { createContext, useState } from "react"
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
  }
  
  const [counter, setCounter] = useState(0)
  
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  const [productToShow, setProductToShow] = useState({})
  
  const [cartProducts, setCartProducts] = useState([])
  
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  const [myOrder, setMyOrder] = useState([])
  
  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      myOrder,
      setMyOrder
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
