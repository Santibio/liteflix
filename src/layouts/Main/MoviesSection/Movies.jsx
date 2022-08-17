import React from 'react'
import styled from 'styled-components'

import Movie1 from '../../../assets/images/img1.png'
import Movie2 from '../../../assets/images/img2.png'
import Movie3 from '../../../assets/images/img3.png'
import Movie4 from '../../../assets/images/img4.png'
import Movie from '../../../components/Movie'


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
`

const Movies = () => {
  return (
    <MoviesContainer>
        {moviesArray.map(({picture, title, rating,year })=>(
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