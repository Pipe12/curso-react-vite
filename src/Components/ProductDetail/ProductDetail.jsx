import { useContext } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const { images, title, price, description } = { ...context.productToShow }

  return (
    <aside 
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="cursor-pointer" onClick={() => context.closeProductDetail()}><XMarkIcon className="w-6 h-6"/></div>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg' 
          src={images} 
          alt={title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-1'>{`$ ${price}`}</span>
        <span className='font-medium text-md'>{title}</span>
        <span className='font-light text-sm'>{description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
