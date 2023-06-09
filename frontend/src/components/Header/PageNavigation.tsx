import React, { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RouteService from '../../api/RouteService';

type PageNavigationProps = {
  element: null | HTMLElement,
  handleOpen: boolean,
  setElement: (element: null | HTMLElement) => void,
}
const PageNavigation: FC<PageNavigationProps> = ({ element, handleOpen, setElement }) => {
  const navigate = useNavigate();

  const handleSideMenuClose = () => {
    setElement(null);
  };

  const getNavigationToCurrentPage = (section: string) => {
    setElement(null);
    switch (section) {
      case 'contact': {
        navigate(RouteService.contact);
        break;
      }
      case 'navigation': {
        navigate(RouteService.navigation);
        break;
      }
      default: {
        throw new Error('Path is not valid');
      }
    }
  };

  return (
    <Menu
      anchorEl={element}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={handleOpen}
      onClose={handleSideMenuClose}
    >
      <MenuItem onClick={() => getNavigationToCurrentPage('contact')}>
        <IconButton size="large" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
      <MenuItem onClick={() => getNavigationToCurrentPage('navigation')}>
        <IconButton size="large" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>Navigation</p>
      </MenuItem>
    </Menu>
  );
};

export default PageNavigation;
