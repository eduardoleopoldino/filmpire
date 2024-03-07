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
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Action', value: 'action' },
  { label: 'Animation', value: 'animation' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
];

const Sidebar = () => {
  return (
    <Root>
      <Link to="/" className="imageLink">
        <img
          className="image"
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Home"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className="links" to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} className="genreImages" height={30} alt="" />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className="links" to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} className="genreImages" height={30} alt="" />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Root>
  );
};

export default Sidebar;
