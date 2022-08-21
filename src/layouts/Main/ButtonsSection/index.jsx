import React from 'react'
import MainButton from '../../../components/UI/Buttons/Button'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styled from 'styled-components'
import Grid from '@mui/material/Grid';

const ButtonsSection = () => {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12} md={6} gap={2} display="flex" justifyContent="center" alignItems="center" sx={{ flexDirection: {xs:"column", md: "row"}}}>
       <MainButton variant="contained" startIcon={<PlayArrowOutlinedIcon />}>Reproducir</MainButton>
        <MainButton 
        variant="outlined"
        custombg="rgba(36, 36, 36, 0.5)"
        startIcon={<AddOutlinedIcon />}
        >Mi lista</MainButton>
      </Grid>
    </Grid>
  )
}

export default ButtonsSection