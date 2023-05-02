import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RouteService from '../../api/RouteService';
import styles from './greeting.module.scss';

const Greeting = () => {
  const navigate = useNavigate();
  return (
    <Container className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Grid item container className={styles.description_container} xs={12} sm={6}>
          <Typography variant="body2">
            This is a project about my travel experience. Welcome!
          </Typography>
        </Grid>
        <Grid item container className={styles.button_container} xs={12} sm={6}>
          <button type="button" className={styles.button} onClick={() => navigate(RouteService.navigation)}>
            Press
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Greeting;
