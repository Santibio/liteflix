import React from 'react'
import styled from 'styled-components'

const NavbarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 27px;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
div {
    width: 27px;
    height: 1px;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-child(3) {
      width: 17px
    }
    }
`


const NavbarButton = ({isOpen,setIsOpen}) => {
  return (
    <NavbarButtonContainer open={isOpen} onClick={()=> setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
    </NavbarButtonContainer>
  )
}

export default NavbarButton