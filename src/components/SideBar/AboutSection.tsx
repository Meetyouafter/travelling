import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

type Rating = {
  life_index: number,
  population: number,
  area: number,
  GDP: number,
}

type Country = {
  country: string,
  description: string,
  capital: string,
  currency: string,
  population: string,
  area: string,
  density: number,
  count_of_cities: number,
  GDP: string,
  rating_in_world: Rating
}

type AboutSectionProps = {
  countryData: Country,
}

const AboutSection:FC<AboutSectionProps> = ({ countryData }) => (
  <>
    <Typography paragraph>{countryData.description}</Typography>
    <Typography paragraph>
      Capital:
      {' '}
      {countryData.capital}
    </Typography>
    <Typography paragraph>
      Currency:
      {' '}
      {countryData.currency}
    </Typography>
    <Typography paragraph>
      Area:
      {' '}
      {countryData.area}
      . The
      {' '}
      {countryData.rating_in_world.area}
      {' '}
      position in the world
    </Typography>
    <Typography paragraph>
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
    <Typography paragraph>
      GDP:
      {' '}
      {countryData.GDP}
      . The
      {' '}
      {countryData.rating_in_world.GDP}
      {' '}
      position in the world
    </Typography>
    <Typography paragraph>
      Life level rating:
      {' '}
      {countryData.rating_in_world.life_index}
    </Typography>

  </>
);

export default AboutSection;
