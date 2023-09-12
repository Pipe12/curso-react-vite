import { useContext } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside 
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeProductDetail()}><XMarkIcon className="w-6 h-6"/></div>
      </div>
    </aside>
  )
}

export default ProductDetail
