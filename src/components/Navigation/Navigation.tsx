import React from 'react';
import { Grid } from '@mui/material';
import RussiaFirstImage from '../../assets/images/countries/Russia1.jpg';
import RussiaSecondImage from '../../assets/images/countries/Russia2.jpg';
import IndiaFirstImage from '../../assets/images/countries/India1.jpg';
import IndiaSecondImage from '../../assets/images/countries/India2.jpg';
import ThailandFirstImage from '../../assets/images/countries/Thailand1.jpg';
import ThailandSecondImage from '../../assets/images/countries/Thailand2.jpg';
import VietnamFirstImage from '../../assets/images/countries/Vietnam1.jpg';
import VietnamSecondImage from '../../assets/images/countries/Vietnam2.jpg';
import CambodiaFirstImage from '../../assets/images/countries/Cambodia1.jpeg';
import CambodiaSecondImage from '../../assets/images/countries/Cambodia2.jpeg';
import KazahstanFirstImage from '../../assets/images/countries/Kazahstan1.jpg';
import KazahstanSecondImage from '../../assets/images/countries/Kazahstan2.jpg';
import KyrgyzstanFirstImage from '../../assets/images/countries/Kyrgyzstan1.jpg';
import KyrgyzstanSecondImage from '../../assets/images/countries/Kyrgyzstan2.jpg';
import UzbekistanFirstImage from '../../assets/images/countries/Uzbekistan1.jpg';
import UzbekistanSecondImage from '../../assets/images/countries/Uzbekistan2.jpg';
import BelarusFirstImage from '../../assets/images/countries/Belarus1.jpg';
import BelarusSecondImage from '../../assets/images/countries/Belarus2.jpg';
import styles from './navigation.module.scss';
import CountryCard from '../CountryCard/CountryCard';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

const countries = [
  {
    id: 1,
    country: 'Russia',
    capital: 'Moscow',
    description: 'My home country with amazing nature, tasty cousine and great cities',
    images: [
      RussiaFirstImage,
      RussiaSecondImage,
    ],
  },
  {
    id: 2,
    country: 'India',
    capital: 'Delhi',
    description: 'olala',
    images: [
      IndiaFirstImage,
      IndiaSecondImage,
    ],
  },
  {
    id: 3,
    country: 'Thailand',
    capital: 'Bangkok',
    description: 'olala',
    images: [
      ThailandFirstImage,
      ThailandSecondImage,
    ],
  },
  {
    id: 4,
    country: 'Vietnam',
    capital: 'Hanoi',
    description: 'olala',
    images: [
      VietnamFirstImage,
      VietnamSecondImage,
    ],
  },
  {
    id: 5,
    country: 'Cambodia',
    capital: 'Phnom Penh',
    description: 'olala',
    images: [
      CambodiaFirstImage,
      CambodiaSecondImage,
    ],
  },
  {
    id: 6,
    country: 'Belarus',
    capital: 'Minsk',
    description: 'olala',
    images: [
      BelarusFirstImage,
      BelarusSecondImage,
    ],
  },
  {
    id: 7,
    country: 'Kazahstan',
    capital: 'Astana',
    description: 'olala',
    images: [
      KazahstanFirstImage,
      KazahstanSecondImage,
    ],
  },
  {
    id: 8,
    country: 'Kyrgyzstan',
    capital: 'Bishkek',
    description: 'olala',
    images: [
      KyrgyzstanFirstImage,
      KyrgyzstanSecondImage,
    ],
  },
  {
    id: 9,
    country: 'Uzbekistan',
    capital: 'Tashkent',
    description: 'olala',
    images: [
      UzbekistanFirstImage,
      UzbekistanSecondImage,
    ],
  },
];

const Navigation = () => (
  <LayoutContainer>
    <Grid container spacing={0.5} className={styles.container}>
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          id={country.id}
          country={country.country}
          capital={country.capital}
          images={country.images}
          description={country.description}
        />
      ))}
    </Grid>
  </LayoutContainer>
);

export default Navigation;
