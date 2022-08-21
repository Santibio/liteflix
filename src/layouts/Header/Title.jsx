import { Typography } from '@mui/material'
import React from 'react'

const Title = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', paddingTop: "5px"}}>
    <Typography color='secondary' variant='h2Bold' >
       Lite
    </Typography>
    <Typography color='secondary' variant='h2'>
       Flix
    </Typography>
    </div>
  )
}

export default Title