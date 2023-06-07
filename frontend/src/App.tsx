import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
import { darkTheme, lightTheme } from './styles/theme';

//  const themeMode = store.getState().theme.theme;
//  const toggleTheme = () => store.dispatch(changeTheme());
//  console.log(themeMode);

const App = () => {
  const [themeForApp, setThemeForApp] = useState('dark');

  const toggleTheme = () => {
    themeForApp === 'dark'
      ? setThemeForApp('light')
      : setThemeForApp('dark');
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeForApp === 'dark' ? darkTheme : lightTheme}>
        <button type="button" onClick={toggleTheme}>Theme</button>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={RouteService.root} element={<Greeting />} />
            <Route
              path={RouteService.navigation}
              element={<Navigation setThemeForApp={toggleTheme} />}
            />
            <Route path="countries/Russia" element={<Russia />} />

            <Route path={RouteService.contact} element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
