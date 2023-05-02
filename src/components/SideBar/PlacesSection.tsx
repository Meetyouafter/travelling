import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import places from '../../mockData/russia/places';

const PlacesSection:FC = () => (
  <div>
    {places.map((place) => (
      <div key={place.id}>
        <Typography>{place.title}</Typography>
        <Typography>{place.description}</Typography>
      </div>
    ))}
  </div>
);

export default PlacesSection;
