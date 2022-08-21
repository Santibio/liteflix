export const featuredMovieMapper = (movie) => {
  if (!Object.keys(movie).length) return {};

  const result = {
    id: movie.id,
    title: movie.original_title,
    picture: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    year: movie.release_date.split("-")[0],
    rating: movie.vote_average,
  };

  return result;
};

export const popularMoviesMapper = (movies) =>{
    if(!movies.length) return []

    const AMOUNT_OF_MOVIES = 4

    const sliceMovies = movies.slice(0, AMOUNT_OF_MOVIES);

    const result = sliceMovies.map((m) => featuredMovieMapper(m));

    return result
}
