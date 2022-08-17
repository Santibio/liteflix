import { Typography } from '@mui/material'
import React from 'react'
import BoldText from '../../components/UI/Text/BoldText'
import LightText from '../../components/UI/Text/LightText'

const Title = () => {
  return (
    <Typography color='secondary' sx={{zIndex: "1500"}}>
        <BoldText>Lite</BoldText>
        <LightText>Flix</LightText>
    </Typography>
  )
}

export default Title