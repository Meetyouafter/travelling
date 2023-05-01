import React, { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';

type Rating = {
  life_index: number,
  population: number,
  area: number,
  GDP: number,
}

type Country = {
  country: string,
  description: string,
  capital: string,
  currency: string,
  population: string,
  area: string,
  density: number,
  count_of_cities: number,
  GDP: string,
  rating_in_world: Rating
}

type SideBarProps = {
  countryData: Country,
  window?: () => Window,
}

const drawerWidth = 240;

const SideBar:FC<SideBarProps> = ({ window, countryData }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState('about');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleElementToggle = (path: string): void => setCurrentElement(path);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {countryData.country}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <MenuSection handleToggle={handleElementToggle} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <MenuSection handleToggle={handleElementToggle} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {currentElement === 'about' && <AboutSection countryData={countryData} />}
        {currentElement === 'cities' && <p>hi</p>}
      </Box>
    </Box>
  );
};

export default SideBar;
