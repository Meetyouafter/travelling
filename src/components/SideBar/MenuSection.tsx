import React, { FC } from 'react';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
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
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About country" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('places')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Visited places" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('recomendation')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My recomendation" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
    </List>
  </div>
);

export default MenuSection;
