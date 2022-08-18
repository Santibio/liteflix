import React from 'react'
import { Dialog, Grid, Slide, Typography } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux'
import { closeModal } from '../../store/addMovieModalSlice'
import MainButton from '../../components/UI/Buttons/Button';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AddMovie = () => {
  const dispatch = useDispatch()
  const {isOpen} = useSelector((state) => state.addMovieModal)

  return (
    <Dialog
        fullScreen
        open={isOpen}
        onClose={()=>dispatch(closeModal())}
        TransitionComponent={Transition}
      >
        <Box  
        sx={{
        paddingTop: "5rem",
        width: "100%",
        height: "100%",
        backgroundColor: 'primary.dark',
      }}>
       <Grid container spacing={3} textAlign='center'>
          <Grid item xs={12} >
             <Typography color="secondary">Agregar Pelicula</Typography>
          </Grid>
          <Grid item xs={12} >
             <MainButton variant="contained" onClick={()=> dispatch(closeModal())}>Subir Pelicula</MainButton>
          </Grid>
          <Grid item xs={12} >
           <MainButton variant="outlined" onClick={()=> dispatch(closeModal())}>Salir</MainButton>
          </Grid>
        </Grid>
        </Box>
      </Dialog>
  )
}

export default AddMovie