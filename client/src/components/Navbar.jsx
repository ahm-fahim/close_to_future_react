import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navlinks } from "../constants/index";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" /> 

    </nav>
  )
}

export default Navbar