import React, { useRef } from 'react'
import TitleSection from './TitleSection'
import MoviesSection from './MoviesSection'
import ButtonsSection from './ButtonsSection'
import Grid from '@mui/material/Grid';
import { Slide } from '@mui/material';



const Index = () => {
    const containerRef = useRef(null);
  return (
    <Grid container px={{xs: 2, md: 4}} ref={containerRef}>
      <Slide
              direction="right"
              in={true}
              timeout={1000}
              container={containerRef.current}
            >

      <Grid item xs={12} md={9}>
        <TitleSection/>
        <ButtonsSection/>
      </Grid>
            </Slide>
            <Slide
              direction="left"
              in={true}
              timeout={1000}
              container={containerRef.current}
            >

      <Grid item  xs={12} md={3}>
        <MoviesSection/>
      </Grid>
            </Slide>
    </Grid>
  )
}

export default Index