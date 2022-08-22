import React from 'react'
import PlayButton from './UI/Buttons/PlayButton'
import styled from 'styled-components'
import Star from './UI/Icons/Star'


const MovieStyle= styled.div`
position: relative;
width: 327px;
overflow: hidden;
height: 172px;
display: flex;
justify-content: center;
align-items: center;
background-image: ${props => `url(${props.bgImage})`};
background-size: cover;
background-position: center;
border-radius: 4px;


 @media (min-width: 900px) {
    width: 220px;
    height: 146px
  }

.movie-img{
    width: 100%;
}
.info-play-container{
    position: absolute;
    top: 100;
    left: 100;
    right: 100;
    bottom: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    transition: opacity 200ms ease-in-out;
}

.play-container{
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

&:hover .info-play-container{
    opacity: 0;
}

.container-hover{
    display: flex;
    flex-direction: column;
    color: #fff;
    position: absolute;
    top: 200px;
    left: 25px;
    transition: top 350ms ease;
    width: 85%;
}

&:hover .container-hover{
    top: 90px;

    @media (min-width: 900px) {
     top: 50px;
     left: 10px
  }
}

.info-play-container-hover{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem
    
}

.play-container.hover{
    width: 24px;
    height: 24px;
    padding-left: 2px;
    margin: 0
}
.info-text-hover{
     text-overflow: ellipsis;
     overflow: hidden; 
     white-space: nowrap;
     width: 244px; 
     
       @media (min-width: 900px) {
         width: 160px; 
  }
}

.rating-year-container{
    display: flex;
    justify-content: space-between
}

.rating-container{
    display: flex;
    align-items: center;
    gap: .5rem
}

.rating,.year{
    font-size: 14px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 2px;
    text-align: left;
}
.rating{
    margin-top: 3px;
}

`


const Movie = ({picture, title, rating, year}) => {
  return (
    <MovieStyle bgImage={picture}>
        <div  className='info-play-container'>
            <div className='play-container'>
                <PlayButton width="12.77" height="16.79"/>
            </div>
            <p className='info-text'>{title}</p>
        </div>
        <div  className='container-hover'>
            <div className='info-play-container-hover'>
                <div className='play-container hover'>
                    <PlayButton width="6.38" height="8.39"/>
                </div>
                <p className='info-text-hover'>{title}</p>
            </div>
            <div className='rating-year-container'>
                 <div className='rating-container'>
                    <Star/>
                     <span className='rating'>{rating || "---"}</span>
                </div>
                <span className='year'>{year}</span>
            </div>
        </div>
    </MovieStyle>
  )
}

export default Movie