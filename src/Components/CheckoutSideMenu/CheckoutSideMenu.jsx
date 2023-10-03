import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from '../../Context'
import { sumPriceAllItems } from '../../../utils'
import OrderCard from '../OrderCard/OrderCard'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const deleteProductCart = (id) => {
    const cartProductsFiltered = context.cartProducts.filter(product =>  product.id !== id )
    context.setCartProducts(cartProductsFiltered)
  }

  const handleCheckout = () => { 
    const orderToAdd = {
      date: '20.09.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: sumPriceAllItems(context.cartProducts)
    }

    context.setMyOrder([...context.myOrder, orderToAdd])
    context.setCartProducts([])
    context.closeCheckoutSideMenu()
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
      <div className='flex flex-col gap-2 px-6 overflow-y-scroll flex-1'>
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
      <div className='px-6 py-6'>
        <p className='flex justify-between items-center font-medium pb-3'>
          <span>Total price</span>
          <span className='text-xl'>{`$ ${sumPriceAllItems(context.cartProducts)}`}</span>
        </p>
        <Link to='/my-order/last'>
          <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() =>  handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
