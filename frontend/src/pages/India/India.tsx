import React, { FC } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import info from '../../mockData/india/info';

const India: FC = () => (
  <SideBar countryData={info} />
);

export default India;
