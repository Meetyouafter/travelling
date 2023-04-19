import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography, Card, CardMedia, CardContent, CardActions, Button,
} from '@mui/material';
import styles from './countryCard.module.scss';

interface CountryProps {
  country: string;
  images: string[];
  description: string;
}

type BinaryStateForImage = 0 | 1;

const CountryCard: FC<CountryProps> = ({ country, images, description }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<BinaryStateForImage>(0);
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => console.log(response));
  }, []);

  console.log(data)

  return (
    <Card
      onMouseEnter={() => setActiveImageIndex(1)}
      onMouseLeave={() => setActiveImageIndex(0)}
      className={styles.card}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={images[activeImageIndex]}
        className={styles.card__image}
        title={country}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
