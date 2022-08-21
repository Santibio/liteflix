import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Movie from '../../../components/Movie'

import { useDispatch } from 'react-redux'
import { getuserMovies } from '../../../store/userMoviesSlice'
import {  getPopularMoviesRequest } from '../../../store/apiMoviesSlice'



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


  let selectedMovies = []

  switch(viewOptions[selectedIndex]){
    case "Populares":
      selectedMovies = popularMovies
      break
    case "Mis Peliculas":
      selectedMovies = userMovies
      break
    default:
      break
  }
 
  return (
    <MoviesContainer>
        {selectedMovies.map(({id,picture, title, rating,year }, index)=>(
        <Movie 
        key={id || index}
        picture={picture} 
        title={title}
        rating={rating} 
        year={year}/>
          ))}
    </MoviesContainer>
  )
}

export default Movies