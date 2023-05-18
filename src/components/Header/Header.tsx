import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate, redirect } from 'react-router-dom';
import styles from './header.module.scss';
import RouteService from '../../api/RouteService';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeTheme } from '../../redux/slices/themeSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector((state) => state.theme.theme);
  console.log(themeMode);


  return (
    <Grid item container className={styles.container}>
      <Button variant="text" className={styles.active_button}>Map</Button>
      <Button variant="contained" className={styles.active_button}>Countries</Button>
      <Button variant="outlined" className={styles.active_button} onClick={() => navigate(RouteService.contact)}>Contact</Button>
      <Button variant="outlined" className={styles.active_button} onClick={() => navigate(RouteService.navigation)}>Navigation page</Button>
      <Button variant="outlined" className={styles.active_button} onClick={() => dispatch(changeTheme())}>Change theme</Button>
    </Grid>
  );
};

export default Header;
