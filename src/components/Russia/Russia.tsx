import React, { FC } from 'react';
import SideBar from '../SideBar/SideBar';

const russiaData = {
  country: 'Russia',
  description: "Russia is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world, encompassing one-eighth of Earth's inhabitable landmass. Russia extends across eleven time zones and shares land boundaries with fourteen countries.[d] It is the world's ninth-most populous country and Europe's most populous country.",
  capital: 'Moscow',
  currency: 'Ruble',
  population: '144,526,989', // https://worldpopulationreview.com/countries
  area: '17,098,246 km2',
  density: 8.4,
  count_of_cities: 1117,
  GDP: '$4.771 trillion',
  rating_in_world: {
    life_index: 70, //  https://en.wikipedia.org/wiki/Quality_of_life_index_by_country
    population: 9,
    area: 1,
    density: 181,
    GDP: 11,
  },
};

const Russia: FC = () => (
  <SideBar countryData={russiaData} />
);

export default Russia;
