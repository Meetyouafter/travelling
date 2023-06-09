import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
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
import India_about from './pages/India/India_about';
import StorageService from './api/StorageService';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState(StorageService.getTheme());

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      StorageService.setItem('theme', 'light');
      setTheme('light');
    } else {
      StorageService.setItem('theme', 'dark');
      setTheme('dark');
    }
  }, [theme]);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={toggleTheme}>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path={RouteService.root} element={<Greeting />} />
              <Route
                path={RouteService.navigation}
                element={<Navigation />}
              />
              <Route path="countries/Russia" element={<Russia />} />
              <Route path="countries/India" element={<India />} />
              <Route path="countries/India/about" element={<India_about />} />

              <Route path={RouteService.contact} element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
