import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import OrderCard from "../../Components/OrderCard/OrderCard"
import { ShoppingCartContext } from "../../Context"

const MyOrder = () => {
  const context = useContext(ShoppingCartContext)
  
  const path = window.location.pathname
  const queryPath = path.slice(path.lastIndexOf('/') + 1)
  
  let indexOrder
  queryPath === 'last' 
    ? indexOrder =  context.myOrder.length - 1 
    : indexOrder = queryPath

  const productsOrder = context.myOrder[indexOrder].products
  return (
    <>
      <div className="flex justify-center  relative w-96 pb-3 px-3">
        <Link to={'/my-orders'} >
          <ChevronLeftIcon className="w-6 h-6 absolute left-0"/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col gap-4 w-80'>
        {
          productsOrder.map( (product, index) => {
            return (<OrderCard 
              key={index} 
              {...product}
            />)
          })
        }
      </div>
    </>
  )
}

export default MyOrder
