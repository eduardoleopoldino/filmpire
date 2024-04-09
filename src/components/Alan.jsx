import alanBtn from '@alan-ai/alan-sdk-web';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  searchMovie,
  selectGenreOrCategory,
} from '../features/currentGenreOrCategory';
import { fetchToken } from '../utils';
import { ColorModeContext } from '../utils/ToggleColorMode';

const Alan = () => {
  const { setMode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const findGenreOrCategory = (genres, genreOrCategory) => {
      const foundGenre = genres.find(
        (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
      );
      if (foundGenre) {
        return foundGenre.id;
      }
      return genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
    };

    alanBtn({
      key: '23b8072891e462f6fd0f23b10fa3ec622e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        switch (command) {
          case 'search':
            dispatch(searchMovie(query));
            break;
          case 'chooseGenre':
            navigate('/');
            dispatch(
              selectGenreOrCategory(
                findGenreOrCategory(genres, genreOrCategory)
              )
            );
            break;
          case 'changeMode':
            setMode(mode);
            break;
          case 'login':
            fetchToken();
            break;

          case 'logout':
            localStorage.clear();
            window.location.href = '/';
            break;

          default:
            break;
        }
      },
    });
  }, []);

  return <></>;
};

export default Alan;
