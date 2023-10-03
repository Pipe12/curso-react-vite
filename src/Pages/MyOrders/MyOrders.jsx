import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard/OrdersCard'

const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <h1 className='font-medium text-xl mb-4'>My Orders</h1>
      {
        context.myOrder.map((order, index) =>  (
          <Link key={index} to={`/my-order/${index}`}>
            <OrdersCard {...order}/>
          </Link>
        ))
      }
    </>
  )
}

export default MyOrders
