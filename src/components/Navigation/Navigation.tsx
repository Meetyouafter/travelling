import React from 'react';
import {
  Typography, Container, Grid, Card, CardMedia, CardContent,
  CardActions, Button,
} from '@mui/material';
import Header from '../Header/Header';
import RussiaFirstImage from '../../assets/images/countries/Russia1.jpg';
import RussiaSecondImage from '../../assets/images/countries/Russia2.jpg';
import IndiaFirstImage from '../../assets/images/countries/India1.jpg';
import IndiaSecondImage from '../../assets/images/countries/India2.jpg';
import ThailandFirstImage from '../../assets/images/countries/Thailand1.jpg';
import ThailandSecondImage from '../../assets/images/countries/Thailand2.jpg';
import styles from './navigation.module.scss';
import CountryCard from '../CountryCard/CountryCard';

const countries = [
  {
    country: 'Russia',
    description: 'olala',
    images: [
      RussiaFirstImage,
      RussiaSecondImage,
    ],
  },
  {
    country: 'India',
    description: 'olala',
    images: [
      IndiaFirstImage,
      IndiaSecondImage,
    ],
  },
  {
    country: 'Thailand',
    description: 'olala',
    images: [
      ThailandFirstImage,
      ThailandSecondImage,
    ],
  },
];

const Navigation = () => {
  const r = 7;

  return (
    <Container className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Header />
        <Grid item className={styles.body} xs={12} sm={12} md={12} lg={12}>
          {countries.map((country) => (
            <CountryCard
              key={country.country}
              country={country.country}
              images={country.images}
              description={country.description}
            />
          ))}
        </Grid>
        <Grid item className={styles.footer} xs={12} sm={12} md={12} lg={12}>Ola</Grid>
      </Grid>
    </Container>
  );
};

export default Navigation;
