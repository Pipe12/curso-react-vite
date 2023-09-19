import { useContext } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard/OrderCard'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const deleteProductCart = (id) => {
    const cartProductsFiltered = context.cartProducts.filter(product =>  product.id !== id )
    context.setCartProducts(cartProductsFiltered)
  }

  return (
    <aside 
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="w-6 h-6"/>
        </div>
      </div>
      <div className='flex flex-col gap-2 px-6 overflow-y-scroll'>
        {
          context.cartProducts.map( (product) => (
            <OrderCard 
              key={product.id} 
              {...product}
              deleteProductCart={deleteProductCart}
            />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
