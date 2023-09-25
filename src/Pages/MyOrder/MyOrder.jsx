import { useContext } from "react"
import OrderCard from "../../Components/OrderCard/OrderCard"
import { ShoppingCartContext } from "../../Context"

const MyOrder = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      My Order
      <div className='flex flex-col gap-4 w-80'>
        {
          context.myOrder[0].products.map( (product) => (
            <OrderCard 
              key={product.id} 
              {...product}
            />
          ))
        }
      </div>
    </>
  )
}

export default MyOrder
