import { createContext, useState } from "react"
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
  }

  const [counter, setCounter] = useState(0)

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
