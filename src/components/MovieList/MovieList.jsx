import React from 'react';
import { Movie } from '..';
import { CustomGrid } from './styles';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  return (
    <CustomGrid container>
      {movies.results
        .slice(excludeFirst ? 1 : 0, numberOfMovies)
        .map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
    </CustomGrid>
  );
};

export default MovieList;
