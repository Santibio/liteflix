import React from 'react'
import MainButton from '../../components/UI/Buttons/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddMovie = () => {
  return (
    <MainButton custombg="transparent" startIcon={<AddOutlinedIcon color="primary"/> }>Agregar Pelicula</MainButton>
  )
}

export default AddMovie