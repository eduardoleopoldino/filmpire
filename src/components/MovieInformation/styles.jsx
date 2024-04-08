import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomGrid = styled(Grid)(({ theme }) => ({
  '&.container, & .container': {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  '& .poster': {
    display: 'flex',
    borderRadius: '20px',
    boxShadow: '.5em 1em 1em rgb(64, 64, 70)',
    width: '80%',
    marginBottom: '30px !important',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
    },
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
  '& .modal': {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .video': {
    border: '1px solid red',
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '50%',
    },
  },
}));
