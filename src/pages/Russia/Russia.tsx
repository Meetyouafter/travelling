import React, { FC } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import info from '../../mockData/russia/info';

const Russia: FC = () => (
  <SideBar countryData={info} />
);

export default Russia;
