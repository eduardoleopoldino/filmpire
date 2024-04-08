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
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, Sidebar } from '../';
import { setUser, userSelector } from '../../features/auth';
import { createSessionId, fetchToken, moviesApi } from '../../utils';
import { ColorModeContext } from '../../utils/ToggleColorMode';

const PREFIX = 'MyNavbar';
const classes = {
  menuButton: `${PREFIX}-menuButton`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  linkButton: `${PREFIX}-linkButton`,
};
const drawerWidth = '240px';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
  '.menuButton': {
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
  const { isAuthenticated, user } = useSelector(userSelector);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();

  const colorMode = useContext(ColorModeContext);

  const token = localStorage.getItem('request_token');
  const initialized = useRef(false);

  useEffect(() => {
    const logInUser = async () => {
      if (!token) {
        return;
      }
      let sessionId = localStorage.getItem('session_id');

      if (sessionId) {
        const { data: userData } = await moviesApi.get(
          `/account?session_id=${sessionId}`
        );
        dispatch(setUser(userData));
      } else {
        sessionId = await createSessionId();
        const { data: userData } = await moviesApi.get(
          `/account?session_id=${sessionId}`
        );
        dispatch(setUser(userData));
      }
    };

    if (!initialized.current) {
      initialized.current = true;
      logInUser();
    }
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
            <IconButton
              className="menuButton"
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevValue) => !prevValue)}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
              </Button>
            )}
          </div>
          {!!isMobile && <Search />}
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
