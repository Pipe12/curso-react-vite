import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center py-5 px-8 text-sm font-sm sticky top-0 z-50 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg ">
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink
            to='/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            pipe@platzi.com
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex gap-1 justify-between items-center'>
          <ShoppingCartIcon className='w-5 h-5'/> 
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
