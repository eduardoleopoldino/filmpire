import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movie, Movies, NavBar, Profile } from './';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Root = styled('div')(() => ({
  display: 'flex',
  height: '100%',
}));

const App = () => {
  return (
    <Root>
      <CssBaseline />
      <NavBar />
      <Box sx={{ flexGrow: 1, padding: '2em' }}>
        <Box sx={{ height: '70px' }} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>
    </Root>
  );
};

export default App;
