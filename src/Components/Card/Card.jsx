import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import PropTypes from 'prop-types'
import { PlusIcon } from '@heroicons/react/24/outline'

const Card = ({ product }) => {
  Card.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.object,
    images: PropTypes.array,
    product: PropTypes.object
  }

  const { price, title, description, category, images } = { ...product }
  
  const context = useContext(ShoppingCartContext)

  const showProduct = (product) => {
    console.log('show product')
    context.openProductDetail()
    context.setProductToShow(product)
  }

  const addProductToCart = (event, product) => {
    event.stopPropagation()
    console.log('Add product to cart') 
    context.setCounter(context.counter + 1)
    context.setCartProducts([...context.cartProducts, product])
    context.openCheckoutSideMenu()
    
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60" onClick={() => showProduct(product)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 py-1 px-1">{category?.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={images} alt={description} />
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event, product)}
        >
          <PlusIcon />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{`$ ${price}`}</span>
      </p>
    </div>
  )
}

export default Card
