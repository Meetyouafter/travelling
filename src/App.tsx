import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Greeting from './components/Greeting/Greeting';
import RouteService from './api/RouteService';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Study from './components/Study/Study';
import Russia from './components/Russia/Russia';
/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/
const theme = createTheme({
  typography: {
    h4: {
      fontFamily: 'Heebo',
      fontSize: 14,
      color: '#fff',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    h2: {
      fontFamily: 'Heebo',
      fontSize: 22,
      color: '#fff',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    body2: {
      fontFamily: 'Lobster',
      fontSize: 38,
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
  },
  palette: {
    primary: {
      main: '#010100',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path={RouteService.contact} element={<Contact />} />
        <Route path={RouteService.root} element={<Russia />} />
        <Route path={RouteService.navigation} element={<Navigation />} />
        <Route path="countries/Russia" element={<Russia />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
