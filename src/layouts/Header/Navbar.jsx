import React, { useState } from 'react'
import NavbarButton from '../../components/UI/Buttons/NavbarButton'

const Navbar = () => {
 const [isOpen, setIsOpen] =  useState(false)
  return (
    <>
    <NavbarButton setIsOpen={setIsOpen} isOpen={isOpen}/>
    </>
  )
}

export default Navbar