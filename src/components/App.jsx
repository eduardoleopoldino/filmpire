import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movie, Movies, NavBar, Profile } from './';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  [`&.root`]: {
    display: 'flex',
    height: '100%',
  },
}));

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: '2em',
}));

const App = () => {
  return (
    <Root className="root">
      <CssBaseline />
      <NavBar />
      <Main>
        <Box
          sx={{
            height: '70px',
            border: '1px solid lime',
          }}
        />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Main>
    </Root>
  );
};

export default App;
