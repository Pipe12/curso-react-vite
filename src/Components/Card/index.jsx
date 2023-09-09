import PropTypes from 'prop-types'

const Card = ({ price, title, description, category, images }) => {
  Card.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.object,
    images: PropTypes.array
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 py-1 px-1">{category?.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={description} />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{`$ ${price}`}</span>
      </p>
    </div>
  )
}

export default Card