import React from 'react'
import PlayButton from './UI/Buttons/PlayButton'
import styled from 'styled-components'


const MovieStyle= styled.div`
position: relative;
width: 350px;
overflow: hidden;
height: 194px;
display: flex;
justify-content: center;
align-items: center;
background-image: ${props => `url(${props.bgImage})`};
background-size: cover;
background-position: center;
transition: all 3s ease;

.movie-img{
    width: 100%;
}
.info-play-contianer{
    position: absolute;
    top: 100;
    left: 100;
    right: 100;
    bottom: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff
    
}

.play-contianer{
    width: 48px;
    height: 48px;
    border: 1px solid #FFFFFF;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(36, 36, 36, 0.5);
    padding-left: 3px;
    margin: 2rem 0 1rem 0rem;
}

.info-text{
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 4px;
    text-align: center;
}

&:hover{
  background-image: linear-gradient(rgba(36, 36, 36, 0.7),rgba(36, 36, 36, 0.7)) , ${props => `url(${props.bgImage})`};

}

`

const Movie = ({picture, title, rating, year}) => {
  return (
    <MovieStyle bgImage={picture}>
        <div  className='info-play-contianer'>
            <div className='play-contianer'>
                <PlayButton/>
            </div>
            <p className='info-text'>{title}</p>
        </div>
    </MovieStyle>
  )
}

export default Movie