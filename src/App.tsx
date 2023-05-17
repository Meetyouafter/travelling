import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Greeting from './pages/Greeting/Greeting';
import RouteService from './api/RouteService';
import Navigation from './pages/VisitedCountries/VisitedCountries';
import Contact from './pages/Contact/Contact';
import Study from './components/Study/Study';
import Russia from './pages/Russia/Russia';
import India from './pages/India/India';
import Kazahstan from './pages/Kazahstan/Kazahstan';
import Error from './pages/Error/Error';
import store from './redux/store';
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
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={RouteService.root} element={<Greeting />} />
          <Route path={RouteService.navigation} element={<Navigation />} />
          <Route path="countries/Russia" element={<Russia />} />

          <Route path={RouteService.contact} element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
