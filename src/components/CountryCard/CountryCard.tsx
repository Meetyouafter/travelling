import React, { FC, useState } from 'react';
import {
  Typography, Card, CardMedia, CardContent, CardActions, Button, Grid, Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './countryCard.module.scss';

interface CountryProps {
  country: string;
  images: string[];
}

type BinaryStateForImage = 0 | 1;

const CountryCard: FC<CountryProps> = ({ country, images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<BinaryStateForImage>(0);

  const navigate = useNavigate();
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
