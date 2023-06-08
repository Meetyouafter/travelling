import React, { useContext, useState } from 'react';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../App';

const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(localStorage.getItem('theme') === 'dark');
  const themeChange = useContext(ThemeContext);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    themeChange();
  };

  return (
    <Switch
      checked={checked}
      onChange={toggleTheme}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default ThemeSwitcher;
