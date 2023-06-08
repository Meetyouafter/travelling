import React, { FC } from 'react';
import { Typography } from '@mui/material';
import Country from './types';

type AboutSectionProps = {
  countryData: Country,
}

const AboutSection:FC<AboutSectionProps> = ({ countryData }) => (
  <>
    <Typography paragraph variant="h2">{countryData.description}</Typography>
    <Typography paragraph variant="h2">
      Capital:
      {' '}
      {countryData.capital}
    </Typography>
    <Typography paragraph variant="h2">
      Currency:
      {' '}
      {countryData.currency}
    </Typography>
    <Typography paragraph variant="h2">
      Area:
      {' '}
      {countryData.area}
      . The
      {' '}
      {countryData.rating_in_world.area}
      {' '}
      position in the world
    </Typography>
    <Typography paragraph variant="h2">
      Population:
      {' '}
      {countryData.population}
      {' '}
      person with
      {' '}
      {countryData.density}
      {' '}
      on every square kilometer. The
      {' '}
      {countryData.rating_in_world.population}
      {' '}
      position in the world
    </Typography>
    <Typography paragraph variant="h2">
      GDP:
      {' '}
      {countryData.GDP}
      . The
      {' '}
      {countryData.rating_in_world.GDP}
      {' '}
      position in the world
    </Typography>
  </>
);

export default AboutSection;
