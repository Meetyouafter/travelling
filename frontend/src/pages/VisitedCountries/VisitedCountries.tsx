import React, { FC } from 'react';
import { Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CountryCard from '../../components/CountryCard/CountryCard';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import visitedCountries from '../../mockData/visitedCountries';
import styles from './visitedCountries.module.scss';

const Navigation:FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'visitedCountries' });

  return (
    <LayoutContainer>
      <Grid container spacing={0.5} className={styles.container}>
        {t('title')}
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
};

export default Navigation;
