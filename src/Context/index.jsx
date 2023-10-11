import { createContext, useState, useEffect } from "react"
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

  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(null)
  const [searchByTitle, setSearchByTitle] = useState(null)
  const [searchByCategory, setSearchByCategory] = useState(null)


  const renderedProducts = (products, searchByTitle) => { 
    const productsToSet = products.filter((product) => { if (product.title.toLowerCase().includes(searchByTitle.toLowerCase())) return product })
    setFilteredProducts(productsToSet)
  }

  const filteredByCategory = (products, searchByCategory) => { 
    const productsToSet = products.filter((product) => {
      if (product.category.name.toLowerCase() === searchByCategory.toLowerCase()) {
        return product
      }
    })
    setFilteredProducts(productsToSet)
  }

  useEffect(() => {
    // renderedProducts(products, searchByTitle)
    if (products && searchByTitle) renderedProducts(products, searchByTitle)
  }, [searchByTitle, products])

  useEffect(() => {
    console.log(searchByCategory)
    // renderedProducts(products, searchByTitle)
    if (products && searchByCategory) filteredByCategory(products, searchByCategory)
    return setSearchByCategory(null)
  }, [searchByCategory, products])

  useEffect(() => {
    fetch( 'https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  
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
      setMyOrder,
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      filteredProducts,
      setFilteredProducts,
      searchByCategory,
      setSearchByCategory
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
