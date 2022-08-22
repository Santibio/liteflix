import styled from "styled-components";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import AddMovie from "./layouts/AddMovie";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getFeaturedMovieRequest } from "./store/apiMoviesSlice";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

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
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(getFeaturedMovieRequest());
  }, [dispatch]);
  
  return (
    <>
      {featuredMovie ? (
        <MainContainer bgImage={featuredMovie.picture}>
          <Grid
            container
            sx={{ maxWidth: "1657px" }}
            margin="auto"
            ref={containerRef}
          >
            <Slide
              direction="down"
              in={true}
              timeout={1000}
              container={containerRef.current}
            >
              <Header />
            </Slide>
            <Main />
            <AddMovie />
          </Grid>
        </MainContainer>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default App;
