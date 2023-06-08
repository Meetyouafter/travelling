import React, { FC } from 'react';
import { Button, Grid } from '@mui/material';
import CountryCard from '../../components/CountryCard/CountryCard';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import visitedCountries from '../../mockData/visitedCountries';
import styles from './visitedCountries.module.scss';

const Navigation:FC = () => (
  <LayoutContainer>
    <Grid container spacing={0.5} className={styles.container}>
      {visitedCountries.map((country) => (
        <CountryCard
          key={country.id}
          country={country.country}
          images={country.images}
        />
      ))}
    </Grid>
  </LayoutContainer>
);

export default Navigation;
