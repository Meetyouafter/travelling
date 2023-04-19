import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from '../Header/Header';
import styles from './navigation.module.scss';

const Navigation = () => {
  const r = 7;

  return (
    <Container className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Header />
        <Grid item className={styles.body} xs={12} sm={12} md={12} lg={12}>Ola</Grid>
        <Grid item className={styles.footer} xs={12} sm={12} md={12} lg={12}>Ola</Grid>
      </Grid>
    </Container>
  );
};

export default Navigation;
