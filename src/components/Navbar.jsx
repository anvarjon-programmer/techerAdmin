import React from 'react'
import { Link } from 'react-router-dom'
import { FaRocketchat } from "react-icons/fa";
import { PiBellRingingLight } from "react-icons/pi";
import { FaExclamationTriangle } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {loggedIn,user} = useSelector(state =>  state.auth)
  return (
    <header>
        <div className='w-full bg-[#000]'>
          <div className='flex items-center justify-between px-10 py-4'>
            <h1 className='text-white'>Rovoj</h1>
              <IoMdMenu className='text-white text-[30px]'/>
          </div>
        </div>
<nav className="bg-[#22AAD8] border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
        <TiHome className='text-[55px] text-black'/>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"  d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className='rounded-[50px] bg-slate-50 h-[60px] w-[60px] flex items-center justify-center'>
          <Link to='/' className="block  py-2 px-3 text-gray-900 rounded-3xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
             <FaExclamationTriangle  className='text-[35px] text-[#FFA301]'/>
          </Link>
        </li>
        <li className='rounded-[50px] bg-slate-50 h-[60px] w-[60px] flex items-center justify-center'>
          <Link to='/' className="block  py-2 px-3 text-gray-900 rounded-3xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
             <FaRocketchat className='text-[35px]'/>
          </Link>
        </li>
        <li className='rounded-[50px] bg-slate-50 h-[60px] w-[60px] flex items-center justify-center'>
          <Link to='/' className="block  py-2 px-3 text-gray-900 rounded-3xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
             <PiBellRingingLight className='text-[35px]'/>
          </Link>
        </li>
        {loggedIn ? (
          <>
          <p className='block  py-2 px-3 rounded-3xl text-[20px] text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>{user.password}</p>
          <button>Logout</button>
          </>
        ): (
          <>
          <li>
            <Link to='/login' className="block  py-2 px-3 rounded-3xl text-[20px] text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Login
            </Link>
          </li>
          </>
        )}
        
      </ul>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Navbar