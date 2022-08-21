import React from 'react'
import TitleSection from './TitleSection'
import MoviesSection from './MoviesSection'
import ButtonsSection from './ButtonsSection'
import Grid from '@mui/material/Grid';



const index = () => {
  return (
    <Grid container px={{xs: 2, md: 4}} >
      <Grid item xs={12} md={9}>
        <TitleSection/>
        <ButtonsSection/>
      </Grid>
      <Grid item  xs={12} md={3}>
        <MoviesSection/>
      </Grid>
    </Grid>
  )
}

export default index