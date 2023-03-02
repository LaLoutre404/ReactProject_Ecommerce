import { useState } from 'react'
import logo from '../assets/logo.png'
import shoppingCart from '../assets/shopping-cart.png'
import User from './userDropDown'

function Header() {

  const [showModal, setShowModal] = useState(false); //si showModal = True affiche la modal panier 

  return (
    <>
      <nav className="bg-light-purple border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-around mx-auto">
          <a href="/" className="flex items-center">
            <img src={logo} className='w-8 h-8' />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FlatWatch</span>
          </a>
          {/* Dropdown User (ne fonctionne pas) */}
          <User />
          <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-light-purple dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 dark-purple bg-dark-purple rounded md:bg-transparent md:text-dark-purple md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/shop" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-dark-purple md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Boutique</a>
              </li>
              <li>
                <a href="/order" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-dark-purple md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Commandes</a>
              </li>
              <li>
                <a href="/login" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-dark-purple md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
              </li>
              <li>
                <a type='button' onClick={() => setShowModal(true)} className="block py-2 pl-3 pr-4 rounded md:p-0 ">
                  <img src={shoppingCart} className='w-5 h-5' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showModal ? (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button onClick={() => setShowModal(false)} type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                           <li>
                            {/* ajouter un article ici */}
                           </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$0</p> 
                        {/* Ajouter le calcul du prix total */}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-dark-purple px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button onClick={() => setShowModal(false)} type="button" className="font-medium text-dark-purple hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : null}
    </>

  )
}

export default Header
