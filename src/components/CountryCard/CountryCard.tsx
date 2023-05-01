import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography, Card, CardMedia, CardContent, CardActions, Button, Grid, Box,
} from '@mui/material';
import styles from './countryCard.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import RouteService from '../../api/RouteService';

interface CountryProps {
  id: number;
  country: string;
  capital: string;
  images: string[];
  description: string;
}

type BinaryStateForImage = 0 | 1;

const CountryCard: FC<CountryProps> = ({
  country, images, description, capital, id,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<BinaryStateForImage>(0);
  const [data, setData] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => console.log(response));
  }, []);

  const handleClick = () => navigate(country);

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
          </Box>
        </CardContent>
        <CardActions className={styles.card__footer}>
          <Button size="small" variant="contained" onClick={handleClick}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CountryCard;
