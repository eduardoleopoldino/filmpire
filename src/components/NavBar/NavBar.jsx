import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme, createTheme, styled } from '@mui/material/styles';

const theme = createTheme();
const styles = {
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
};

const MyMenu = styled('nav')(({ theme }) => ({}));

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={styles.toolbar}>
          {isMobile && (
            <IconButton
              className={styles.menuButton}
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {}}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'light' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profiles/123`}
                onClick={() => {}}
              >
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
              </Button>
            )}
          </div>
          {!!isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div></div>
    </>
  );
};

export default NavBar;
