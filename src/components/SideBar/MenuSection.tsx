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
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleToggle('cities')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Visited cities" />
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
