import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import styles from './contact.module.scss';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import SocialItem from '../../components/SocialItem/SocialItem';
import socialData from './contacts';

const Contact: FC = () => (
  <LayoutContainer>
    <Grid container className={styles.list}>
      {socialData.map((network) => (
        <SocialItem
          network={network.network}
          link={network.link}
          icon={network.icon}
          key={network.index}
        />
      ))}
    </Grid>
  </LayoutContainer>
);

export default Contact;
