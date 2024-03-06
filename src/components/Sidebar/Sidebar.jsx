import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const blueLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const redLogo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const theme = createTheme();
const styles = {
  image: {
    width: '70px',
  },
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
};

const Sidebar = () => {
  return (
    <>
      <Link to="/" sx={styles.imageLink}>
        <img
          className={styles.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Home"
        />
      </Link>
    </>
  );
};

export default Sidebar;
