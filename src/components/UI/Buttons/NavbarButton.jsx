import React from 'react'
import styled from 'styled-components'
import useWindowSize from '../../../hooks/useWindowSize'

const NavbarButtonStyle = styled.div`
  display: ${({show})=> show? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  width: 27px;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4000;
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
      transform: ${({ open, directionChange }) => open ? directionChange && open ?'rotate(-45deg) translate(-7px, -7px)' : "rotate(-45deg)" : 'rotate(0)'};
      width: 17px;
      right: ${({directionChange})=> directionChange ? "-10px" : "0"};
    }

    }
`


const NavbarButton = ({ isOpen, show, onClick}) => {
  const { width } = useWindowSize()

  const stylePosition= width>= 900 ? { float: "right",paddingRight: "1rem"} : {}
  return (
    <div style={stylePosition}>
    <NavbarButtonStyle open={isOpen} onClick={onClick} show={show} directionChange={width>= 900}>
        <div />
        <div />
        <div />
    </NavbarButtonStyle>
    </div>
  )
}

export default NavbarButton