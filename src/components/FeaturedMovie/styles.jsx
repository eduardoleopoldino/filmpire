import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBox = styled(Box)(({ theme }) => ({
  '&.featuredCardContainer': {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',
    textDecoration: 'none',
  },
  '& .card': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  '& .cardRoot': {
    position: 'relative',
  },
  '& .cardMedia': {
    position: 'absolute',
    inset: '0',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  '& .cardContent': {
    color: '#fff',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  '& .cardContentRoot': {
    position: 'relative',
    backgroundColor: 'transparent',
  },
}));
