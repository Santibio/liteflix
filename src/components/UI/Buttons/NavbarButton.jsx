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
  z-index: 1500;

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

     :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg) scaleX(0.64)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      width: 17px
    }

    }
`


const NavbarButton = ({ isOpen,setIsOpen}) => {
  return (
    <NavbarButtonContainer open={isOpen} onClick={()=> setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
    </NavbarButtonContainer>
  )
}

export default NavbarButton