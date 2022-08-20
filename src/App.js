import styled from "styled-components";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import AddMovie from './layouts/AddMovie'

import { useSelector } from "react-redux";

const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(36, 36, 36, 0) 0%,
      #242424 100%
    ),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
`;

function App() {
  const {featuredMovie} = useSelector((state) => state.apiMovies);
  return (
    <MainContainer
      bgImage="https://image.tmdb.org/t/p/original/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
    >
      <Header />
      <Main />
      <AddMovie />
    </MainContainer>
  );
}

export default App;
