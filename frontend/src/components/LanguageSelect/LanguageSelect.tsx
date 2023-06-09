import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LanguageIcon from '@mui/icons-material/Language';
import StorageService from '../../api/StorageService';

const CustomSelect = styled(Select)(() => ({
  height: '30px',
  width: '60px',
  marginRight: '10px',
  '& .MuiOutlinedInput-input': {
    padding: '0px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const LanguageSelect = () => {
  const [currentLng, setCurrentLng] = useState('default');
  const { i18n } = useTranslation();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setCurrentLng(value);

    if (value !== 'default') {
      StorageService.setItem('language', value);
      i18n.changeLanguage(value);
    }
  };

  return (
    <CustomSelect
      value={currentLng}
      onChange={handleChange}
      autoWidth
    >
      <MenuItem value="default">
        <LanguageIcon />
      </MenuItem>
      <MenuItem value="ru">Ru</MenuItem>
      <MenuItem value="en">En</MenuItem>
    </CustomSelect>
  );
};

export default LanguageSelect;
