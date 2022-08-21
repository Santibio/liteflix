import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid';

const Index = () => {
  const { featuredMovie } = useSelector((state) => state.apiMovies);
  return (
    <Grid container sx={{marginTop: {xs: "15rem", md: "calc(50% - 100px/2 + 166px)"}}}>
      <Grid item xs={12}  justifyContent={{xs: "center", md: 'flex-start'}} display='flex' gap={1}>
        <Typography textAlign="center" color="primary"  variant="h3">Original de </Typography>
        <Typography textAlign="center" color="primary"  variant="h3Bold">Liteflix</Typography>
      </Grid>
      <Grid item  xs={12}>
    <Typography color="secondary" variant="h1" textAlign={{xs: "center", md: 'left'}}>
        {featuredMovie.title}
    </Typography>
      </Grid>
    </Grid>
  )
}

export default Index