import React from 'react'
import MainButton from '../../../components/UI/Buttons/Button'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styled from 'styled-components'

const ButtonsContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
margin-top: 2rem;

`
const ButtonsSection = () => {
  return (
    <ButtonsContainer>
    <MainButton variant="contained" startIcon={<PlayArrowOutlinedIcon />}>Reproducir</MainButton>
    <MainButton variant="outlined" startIcon={<AddOutlinedIcon />}>Mi lista</MainButton>
    </ButtonsContainer>
  )
}

export default ButtonsSection