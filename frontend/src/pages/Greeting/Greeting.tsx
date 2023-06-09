import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RouteService from '../../api/RouteService';
import styles from './greeting.module.scss';

const Greeting = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'greeting' });
  const navigate = useNavigate();

  return (
    <Container className={styles.wrapper} maxWidth="xl">
      <Grid container className={styles.container}>
        <Grid item container className={styles.description_container} xs={12} sm={6}>
          <Typography variant="body2">
            {t('title')}
          </Typography>
        </Grid>
        <Grid item container className={styles.button_container} xs={12} sm={6}>
          <button type="button" className={styles.button} onClick={() => navigate(RouteService.navigation)}>
            {t('button')}
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Greeting;
