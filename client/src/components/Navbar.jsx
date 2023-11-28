// import { useState } from "react"
import { logo } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" /> 
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, idx) => (
          <li
            
          ></li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar