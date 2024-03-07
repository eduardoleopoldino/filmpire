import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Movie } from '..';

const Root = styled('div')(({ theme }) => ({
  '.moviesContainer': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const MovieList = ({ movies }) => {
  return (
    <Root>
      <Grid container className="moviesContainer">
        {movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </Root>
  );
};

export default MovieList;
