import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import places from '../../mockData/russia/places';
import { Button } from '@mui/material';

const PlacesSection:FC = () => (
  <div>
    {places.map((place) => (
      <div key={place.id}>
        <Typography>{place.title}</Typography>
        <Typography>{place.description}</Typography>
        <Button>Learn more</Button>
      </div>
    ))}
  </div>
);

export default PlacesSection;
