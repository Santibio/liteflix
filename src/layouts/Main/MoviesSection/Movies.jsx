import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Movie from '../../../components/Movie'
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from 'react-redux'
import { getuserMovies } from '../../../store/userMoviesSlice'
import {  getPopularMoviesRequest } from '../../../store/apiMoviesSlice'
import { Typography } from '@mui/material'



const MoviesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
margin-bottom: 2rem;
`


const Movies = ({selectedIndex, viewOptions}) => {
  const dispatch = useDispatch()
  const {userMovies} = useSelector((state) => state.userMovies)
  const {popularMovies} = useSelector((state) => state.apiMovies)

  useEffect(()=>{
    dispatch(getuserMovies())
    dispatch(getPopularMoviesRequest())
  },[dispatch])


  let selectedMovies

  switch(viewOptions[selectedIndex]){
    case "Populares":
      selectedMovies = popularMovies
      break
    case "Mis Películas":
      selectedMovies = userMovies
      break
    default:
      break
  }

  if(!selectedMovies) return <CircularProgress/>
 
  return (
    <MoviesContainer>
        {selectedMovies.length? selectedMovies.map(({id,picture, title, rating,year }, index)=>(
        <Movie 
        key={id || index}
        picture={picture} 
        title={title}
        rating={rating} 
        year={year}/>
          )) : <Typography color="primary" variant="h6">No se encuentran Películas</Typography>}
    </MoviesContainer>
  )
}

export default Movies