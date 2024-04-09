import { styled } from '@mui/material/styles';

export const CustomDiv = styled('div')(({ theme }) => ({
  '&.root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
  },
  '& .button': {
    margin: '3px 2px',
  },
  '& .pageNumber': {
    margin: '0 20px !important',
    color: theme.palette.text.primary,
  },
}));
