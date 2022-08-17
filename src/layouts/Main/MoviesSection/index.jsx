import React from 'react'
import ViewDropDown from './ViewDropDown'
import styled from 'styled-components'

const MovieSectionContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 5rem;`

const index = () => {
  return (
    <MovieSectionContainer>
    <ViewDropDown/>
    </MovieSectionContainer>
  )
}

export default index