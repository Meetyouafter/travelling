import React from 'react';
import Instagram from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

type SocialData = {
  network: string,
  link: string,
  icon: React.ReactNode,
  index: number,
}
const socialData: SocialData[] = [
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

export default socialData;
