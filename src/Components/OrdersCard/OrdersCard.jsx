import PropTypes from 'prop-types'
import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const OrdersCard = ({totalPrice, totalProducts}) => {
  OrdersCard.propTypes = {
    totalPrice:     PropTypes.number,
    totalProducts:  PropTypes.number,
  }

  return (
    <div className="mb-4 border border-black p-4 w-80 rounded-lg">
      <div className='flex justify-between items-center'>
        <div className='flex flex-col font-light gap-1'>
          <p className='flex gap-2'>
            <CalendarDaysIcon className='w-6 h-6'/>
            <span>26.09.2023</span>
          </p>
          <p className='flex gap-2'>
            <ShoppingBagIcon className='w-6 h-6'/>
            <span>{totalProducts} articles</span>

          </p>
        </div>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='w-6 h-6'/>
        </p>
      </ div>
    </div>
  )
}

export default OrdersCard
