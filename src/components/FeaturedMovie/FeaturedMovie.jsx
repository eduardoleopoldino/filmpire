import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from '@mui/material';
import { CustomBox } from './styles';

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;

  return (
    <CustomBox
      component={Link}
      to={`/movie/${movie.id}`}
      className="featuredCardContainer"
    >
      <Card className="card" classes={{ root: 'cardRoot' }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="cardMedia"
        />
        <Box padding="20px" style={{ position: 'absolute', bottom: '0' }}>
          <CardContent
            className="cardContent"
            classes={{ root: 'cardContentRoot' }}
          >
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </CustomBox>
  );
};

export default FeaturedMovie;
