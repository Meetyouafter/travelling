import React, { FC } from 'react';
import Divider from '@mui/material/Divider';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

type MenuSectionProps = {
  handleToggle: (path: string) => void,
}
const MenuSection: FC<MenuSectionProps> = ({ handleToggle }) => (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('about')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About country" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('places')}>
          <ListItemIcon>
            <FlightTakeoffIcon />
          </ListItemIcon>
          <ListItemText primary="Visited places" />
        </ListItemButton>
      </ListItem>
    </List>
  </div>
);

export default MenuSection;
