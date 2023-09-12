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

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
