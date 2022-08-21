import React from 'react'
import MainButton from '../../components/UI/Buttons/Button'
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/addMovieModalSlice'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddMovie = () => {
  const dispatch = useDispatch()
  return (
    <MainButton 
    onClick={()=>dispatch(openModal())}
    custombg="transparent"
    startIcon={<AddOutlinedIcon color="primary"/> }>Agregar Pelicula</MainButton>
  )
}

export default AddMovie