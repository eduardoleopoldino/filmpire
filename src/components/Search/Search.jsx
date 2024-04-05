import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Root = styled('div')(({ theme }) => ({
  searchContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  '.input': {
    color: theme.palette.mode === 'light' && 'black',
    filter: theme.palette.mode === 'light' && 'invert(1)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
      marginBottom: '10px',
    },
  },
}));
const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <Root className='searchContainer'>
      <TextField
        InputProps={{
          className: 'input',
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onKeyUp={handleKeyUp}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
      />
    </Root>
  );
};

export default Search;
