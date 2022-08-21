import { Typography } from '@mui/material'
import React from 'react'
import BoldText from '../../../components/UI/Text/BoldText'
import LightText from '../../../components/UI/Text/LightText'
import TitleText from '../../../components/UI/Text/TitleText'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
`

const Index = () => {
  const { featuredMovie } = useSelector((state) => state.apiMovies);
  return (
    <TitleContainer>
    <Typography textAlign="center" color="primary"  component="div">
        <LightText>ORIGINAL DE </LightText>
        <BoldText>LITEFLIX</BoldText>
    </Typography>
    <Typography color="secondary" component="div">
        <TitleText>
        {featuredMovie.title}
        </TitleText>
    </Typography>
    </TitleContainer>
  )
}

export default Index