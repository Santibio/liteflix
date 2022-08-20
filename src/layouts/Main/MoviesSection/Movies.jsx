import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Movie1 from '../../../assets/images/img1.webp'
import Movie2 from '../../../assets/images/img2.webp'
import Movie3 from '../../../assets/images/img3.webp'
import Movie4 from '../../../assets/images/img4.webp'
import Movie from '../../../components/Movie'

import { useDispatch } from 'react-redux'
import { getuserMovies } from '../../../store/userMoviesSlice'
import { getFeaturedMovieRequest } from '../../../store/apiMoviesSlice'


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

const Movies = () => {
  const dispatch = useDispatch()
  const {userMovies} = useSelector((state) => state.userMovies)
  console.log("userMovies: ", userMovies);


  useEffect(()=>{
    dispatch(getuserMovies())
    dispatch(getFeaturedMovieRequest())
  },[dispatch])


  return (
    <MoviesContainer>
        {userMovies.map(({picture, title, rating,year })=>(
        <Movie 
        key={title}
         picture={picture} 
         title={title}
          rating={rating} 
          year={year}/>
          ))}
    </MoviesContainer>
  )
}

export default Movies