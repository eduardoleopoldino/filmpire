import React from 'react';
import { CustomDiv } from './styles';
import { Button, Typography } from '@mui/material';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  if (totalPages === 0) return null;

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <CustomDiv className="root">
      <Button
        onClick={handlePrev}
        className="button"
        variant="contained"
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography variant="h4" className="pageNumber">
        {currentPage} / {totalPages}
      </Typography>
      <Button
        onClick={handleNext}
        className="button"
        variant="contained"
        color="primary"
        type="button"
      >
        Next
      </Button>
    </CustomDiv>
  );
};

export default Pagination;
