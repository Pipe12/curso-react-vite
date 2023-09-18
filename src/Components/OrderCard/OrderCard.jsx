import { XMarkIcon } from "@heroicons/react/24/outline"
import PropTypes from 'prop-types'

const OrderCard = ({price, title, images}) => {
  OrderCard.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string,
    images: PropTypes.array
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={images} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        <div className="cursor-pointer">
          <XMarkIcon className="w-6 h-6"/>
        </div>
      </div>
    </div>
  )
 }

 export default OrderCard
