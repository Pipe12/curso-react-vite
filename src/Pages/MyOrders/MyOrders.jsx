import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const MyOrders = () => {

  const context = useContext(ShoppingCartContext)

  return (
    <>
      My Orders
      {
        context.cartProducts.map((product) =>  <div key={product.id}>{product.title}</div>)
      }
    </>
  )
}

export default MyOrders
