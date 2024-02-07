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

const redLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const blueLogo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const theme = createTheme();
const styles = {
  image: {},
  imageLink: {},
};

const Sidebar = () => {
  return (
    <>
      <Link to="/">HOME</Link>
    </>
  );
};

export default Sidebar;
