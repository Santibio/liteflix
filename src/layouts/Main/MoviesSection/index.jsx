import React, { useState } from 'react'
import ViewDropDown from './ViewDropDown'
import Movies from './Movies'
import Grid from '@mui/material/Grid';


const viewOptions = ["Populares", "Mis Películas"]

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Grid container flexDirection="column" alignItems={{xs:"center"}} mt={{xs: '5rem', md: 0}}>
    <ViewDropDown selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} viewOptions={viewOptions}/>
    <Movies selectedIndex={selectedIndex} viewOptions={viewOptions}/>
    </Grid>
  )
}

export default Index