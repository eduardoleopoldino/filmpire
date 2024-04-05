import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, styled } from '@mui/material/styles';
import { useGetGenresQuery } from '../../services/TMDB';
import GenreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const theme = createTheme();
const blueLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const redLogo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const Root = styled('div')(({ theme }) => ({
  ['& .image']: {
    width: '70%',
  },
  ['& .imageLink']: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  ['& .links']: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  ['& .genreImages']: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
}));

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = () => {
  const { data, error, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  if (error) return 'An error has occured.';

  return (
    <Root>
      <Link to="/" className="imageLink">
        <img
          className="image"
          src={theme.palette.mode === 'dark' ? redLogo : blueLogo}
          alt="Filmpire Home"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className="links" to="/">
            <ListItemButton
              onClick={() => dispatch(selectGenreOrCategory(value))}
            >
              <ListItemIcon>
                <img
                  src={GenreIcons[value.toLocaleLowerCase()]}
                  className="genreImages"
                  height={30}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ id, name }) => (
            <Link key={id} className="links" to="/">
              <ListItemButton
                onClick={() => dispatch(selectGenreOrCategory(id))}
              >
                {
                  <ListItemIcon>
                    <img
                      src={GenreIcons[name.toLocaleLowerCase()]}
                      className="genreImages"
                      height={30}
                      alt=""
                    />
                  </ListItemIcon>
                }
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </Root>
  );
};

export default Sidebar;
