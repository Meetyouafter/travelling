import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../App';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: 'url(https://i.ibb.co/FxzBYR9/night.png)',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffe30b' : '#332a2a',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.ibb.co/7JfqXxB/sunny.png)',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(localStorage.getItem('theme') !== 'dark');
  const themeChange = useContext(ThemeContext);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    themeChange();
  };

  return (
    <CustomSwitch sx={{ m: 1 }} checked={checked} onChange={toggleTheme} />
  );
};

export default ThemeSwitcher;
