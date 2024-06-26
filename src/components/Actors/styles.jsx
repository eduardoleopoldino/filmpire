import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomGrid = styled(Grid)(({ theme }) => ({
  '& .container': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  '& .image': {
    borderRadius: '20px',
    boxShadow: '.5em .5em 1em rgb(64, 64, 70)',
    objectFit: 'cover',
    maxWidth: '90%',
  },
  '& .genresContainer': {
    margin: '10px 0 !important',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  '& .genreImage': {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px',
  },
  '& .links': {
    display: 'flex',
    justifyContent: 'center',
    alignItens: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '.5rem 1rem',
    },
  },
  '& .castImage': {
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  '& .buttonsContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
