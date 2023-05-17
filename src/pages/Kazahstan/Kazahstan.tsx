import React, { FC } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import info from '../../mockData/kazahstan/info';

const Kazahstan: FC = () => (
  <SideBar countryData={info} />
);

export default Kazahstan;
