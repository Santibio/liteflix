import styled from "styled-components";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import AddMovie from "./layouts/AddMovie";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFeaturedMovieRequest } from "./store/apiMoviesSlice";
import { Grid } from "@mui/material";

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
  const dispatch = useDispatch();
  const { featuredMovie } = useSelector((state) => state.apiMovies);
  
  useEffect(() => {
    dispatch(getFeaturedMovieRequest());
  }, [dispatch]);
  return (
    <MainContainer bgImage={featuredMovie.picture}>
      <Grid container sx={{ maxWidth: "1657px" }} margin="auto">
        <Header />
        <Main />
        <AddMovie />
      </Grid>
    </MainContainer>
  );
}

export default App;
