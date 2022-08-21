import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Movie1 from '../../../assets/images/img1.webp'
import Movie2 from '../../../assets/images/img2.webp'
import Movie3 from '../../../assets/images/img3.webp'
import Movie4 from '../../../assets/images/img4.webp'
import Movie from '../../../components/Movie'

import { useDispatch } from 'react-redux'
import { getuserMovies, get } from '../../../store/userMoviesSlice'
import { getFeaturedMovieRequest, getPopularMoviesRequest } from '../../../store/apiMoviesSlice'


const moviesArray = [
    {picture: Movie1, title: "House of Card", rating: "7.5", year: "2010"},
    {picture: Movie2, title: "The Crown", rating: "7.5", year: "2010"},
    {picture: Movie3, title: "Stranger Things", rating: "7.5", year: "2010"},
    {picture: Movie4, title: "Marseille", rating: "7.5", year: "2010"},
]

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
        {selectedMovies.map(({id,picture, title, rating,year })=>(
        <Movie 
        key={id}
        picture={picture} 
        title={title}
        rating={rating} 
        year={year}/>
          ))}
    </MoviesContainer>
  )
}

export default Movies