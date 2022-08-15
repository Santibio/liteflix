import React from 'react'
import ProfilePicture from './ProfilePicture'
import Navbar from './Navbar'
import Title from './Title'
import styled from 'styled-components'

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
`

const Header = () => {
  return (
    <HeaderContainer>
    <Navbar/>
    <Title/>
    <ProfilePicture/>
    </HeaderContainer>
  )
}

export default Header