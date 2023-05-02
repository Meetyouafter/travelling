import React, { ReactNode, FC } from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './socialItem.module.scss';

type SocialItemProps = {
  network: string,
  link: string,
  icon: ReactNode,
}

const SocialItem: FC<SocialItemProps> = ({ network, link, icon }) => (
  <Grid item className={styles.item}>
    <a href={link} className={styles.link} target="_blank" rel="noreferrer">
      {icon}
      <Typography variant="h2" className={styles.text}>{network}</Typography>
    </a>
  </Grid>
);

export default SocialItem;
