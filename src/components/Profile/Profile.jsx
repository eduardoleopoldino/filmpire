import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '../';

function Profile() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const sessionId = localStorage.getItem('session_id');
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user.id,
    sessionId: sessionId,
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlisted } =
    useGetListQuery({
      listName: 'watchlist/movies',
      accountId: user.id,
      sessionId: sessionId,
      page: 1,
    });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  if (!isAuthenticated) {
    return <>Not Authenticated</>;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favourite or watchlist same movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" movies={favoriteMovies} />
          <RatedCards title="Watchlist" movies={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
}

export default Profile;
