import React, { useEffect } from 'react'
import ViewDropDown from './ViewDropDown'
import styled from 'styled-components'
import Movies from './Movies'


const MovieSectionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 5rem;`

const index = () => {
  
  return (
    <MovieSectionContainer>
    <ViewDropDown/>
    <Movies/>
    </MovieSectionContainer>
  )
}

export default index