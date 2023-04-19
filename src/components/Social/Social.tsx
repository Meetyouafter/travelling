import React from 'react';
import { Grid } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import SocialItem from './SocialItem';
import styles from './social.module.scss';

const socialData = [
  {
    network: 'Linkedin',
    link: 'https://www.linkedin.com/in/antonlevus/',
    icon: <LinkedInIcon />,
    index: 1,
  },
  {
    network: 'Instagram',
    link: 'https://www.instagram.com/levis_irk/',
    icon: <Instagram />,
    index: 2,
  },
  {
    network: 'GitHub',
    link: 'https://github.com/Meetyouafter',
    icon: <GitHubIcon />,
    index: 3,
  },
  {
    network: 'Telegram',
    link: 'https://telegram.me/lev_ant',
    icon: <TelegramIcon />,
    index: 4,
  },
  {
    network: 'WhatsApp',
    link: 'https://wa.me/89025688428',
    icon: <WhatsAppIcon />,
    index: 5,
  },
];

const Social = () => (
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
);

export default Social;
