import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RouteService from '../../api/RouteService';

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
          <Typography variant="body2">
            Error page
          </Typography>
    </Container>
  );
};

export default Error;
