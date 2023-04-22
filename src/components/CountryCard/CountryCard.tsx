import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography, Card, CardMedia, CardContent, CardActions, Button, Grid, Box,
} from '@mui/material';
import styles from './countryCard.module.scss';

interface CountryProps {
  country: string;
  capital: string;
  images: string[];
  description: string;
}

type BinaryStateForImage = 0 | 1;

const CountryCard: FC<CountryProps> = ({
  country, images, description, capital,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<BinaryStateForImage>(0);
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => console.log(response));
  }, []);

  console.log(data);

  return (
    <Grid item className={styles.wrapper} xs={12}>
      <Card
        onMouseEnter={() => setActiveImageIndex(1)}
        onMouseLeave={() => setActiveImageIndex(0)}
        className={styles.card}
        sx={{ backgroundColor: '#FDB750' }}
      >
        <CardMedia
          image={images[activeImageIndex]}
          className={styles.card__image}
          title={country}
        />
        <CardContent className={styles.card__content}>
          <Box>
            <Typography gutterBottom variant="h5">
              {country}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <Box className={styles.card__content_info}>
            <Typography variant="body2">
              Capital:
              {' '}
              {capital}
            </Typography>
            <Typography variant="body2">
              Weather:
            </Typography>
          </Box>
        </CardContent>
        <CardActions className={styles.card__footer}>
          <Button size="small" variant="contained">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CountryCard;
