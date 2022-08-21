import React from 'react'
import ProfilePicture from './ProfilePicture'
import Navbar from './Navbar'
import Title from './Title'
import Grid from '@mui/material/Grid';
import AddMovie from './AddMovie'
import Notification from './Notification'


const Header = () => {
  return (
    <Grid container p={{xs: 2, md: 4}} alignItems="center" sx={{margin: "auto"}}>
      <Grid item xs={4} md={1} order={{xs: 1, md: 2}} sx={{zIndex: "1500"}}>
        <Navbar/>
      </Grid>
      <Grid item  xs={4} md={1} order={{xs: 2, md: 1}} sx={{zIndex: "1500"}}>
        <Title/>
      </Grid>
      <Grid item  xs={4} md={1} order={{xs: 3, md: 3}} sx={{zIndex: "1500"}}>
        <ProfilePicture/>
      </Grid>
      <Grid item   md={8} order={{xs: 3, md: 1}} sx={{ display: { md: 'block', xs: 'none' } }} >
        <AddMovie/>
      </Grid>
      <Grid item   md={1} order={{xs: 3, md: 2}} sx={{ display: { md: 'block', xs: 'none' }, zIndex: "1500" }}>
        <Notification/>
      </Grid>
    </Grid>
  )
}

export default Header