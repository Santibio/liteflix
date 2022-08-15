import React from 'react'
import TitleSection from './TitleSection'
import MoviesSection from './MoviesSection'
import styled from 'styled-components'

const Main = styled.main`
margin-top: 15rem;   
`


const index = () => {
  return (
    <Main>
        <TitleSection/>
        <MoviesSection/>
    </Main>
  )
}

export default index