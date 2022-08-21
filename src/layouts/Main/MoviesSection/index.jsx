import React, { useEffect, useState } from 'react'
import ViewDropDown from './ViewDropDown'
import styled from 'styled-components'
import Movies from './Movies'


const MovieSectionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 5rem;`

const viewOptions = ["Populares", "Mis Peliculas"]

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <MovieSectionContainer>
    <ViewDropDown selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} viewOptions={viewOptions}/>
    <Movies selectedIndex={selectedIndex} viewOptions={viewOptions}/>
    </MovieSectionContainer>
  )
}

export default Index