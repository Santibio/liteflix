import React from 'react'
import bgImage from '../../assets/images/background.png'
import styled from 'styled-components'

const BackgroundImageContainer = styled.div`
width: 100vw;
`
const Image = styled.img`
width: 100vw;
`
const BackgroundImage = () => {
  return (
    <BackgroundImageContainer>
        <Image src={bgImage} alt="background"/>
    </BackgroundImageContainer>
  )
}

export default BackgroundImage