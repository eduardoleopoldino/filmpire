import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useAlan from './Alan';

const Root = styled('div')(() => ({
  display: 'flex',
  height: '100%',
}));

const App = () => {
  const alanBtnContainer = useRef();
  useAlan();

  return (
    <Root>
      <NavBar />
      <Box sx={{ flexGrow: 1, padding: '2em', width: '100%' }}>
        <Box sx={{ height: '70px' }} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>
      <div ref={alanBtnContainer} />
    </Root>
  );
};

export default App;
