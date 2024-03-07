import {
  AccountCircle,
  Brightness4,
  Brightness7,
  Menu,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../';

const PREFIX = 'MyNavbar';
const classes = {
  menuButton: `${PREFIX}-menuButton`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  linkButton: `${PREFIX}-linkButton`,
};
const drawerWidth = '200px';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
  '& .teste': {
    border: '1px solid red',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  [`& .${classes.linkButton}`]: {
    '&:hover': {
      color: '#fff !important',
      textDecoration: 'none',
    },
  },
}));

const StyledNav = styled('nav')(({ theme }) => ({
  [`&.${classes.drawer}`]: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
            <IconButton
              className="teste"
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevValue) => !prevValue)}
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
                to={`/profiles/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
              </Button>
            )}
          </div>
          {!!isMobile && 'Search...'}
        </StyledToolbar>
      </AppBar>
      <div>
        <StyledNav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevValue) => !prevValue)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
            </Drawer>
          )}
        </StyledNav>
      </div>
    </>
  );
};

export default NavBar;
