import React from 'react';
import { Typography, Link, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomGrid = styled(Grid)(({ theme }) => ({
  '& .movie': {
    padding: '10px',
  },
  '& .links': {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  '& .image': {
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  '& .title': {
    color: theme.palette.text.primary,
    textOverflow: 'elipsis',
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));

const Movie = ({ movie, i }) => {
  return (
    <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2} className="movie">
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className="links" top={`/movie/${movie.id}`}>
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
