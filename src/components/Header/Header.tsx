import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import RouteService from '../../api/RouteService';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Grid item container className={styles.container}>
      <Button variant="text" className={styles.active_button}>Map</Button>
      <Button variant="contained" className={styles.active_button}>Countries</Button>
      <Button variant="outlined" className={styles.active_button} onClick={() => navigate(RouteService.contact)}>Contact</Button>
    </Grid>
  );
};

export default Header;
