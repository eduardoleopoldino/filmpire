import { Grow, Link, Rating, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { CustomGrid } from './styles';

const Movie = ({ movie, i }) => {
  return (
    <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2} className="movie">
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className="links" href={`/movie/${movie.id}`}>
          <img
            className="image"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://fillmurray.com/200/300'
            }
            alt={movie.title}
          />
          <Typography className="title" variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </CustomGrid>
  );
};

export default Movie;
