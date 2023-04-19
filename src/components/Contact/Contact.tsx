import React from 'react';
import {
  Grid, Button, Container, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './contact.module.scss';
import RouteService from '../../api/RouteService';
import Header from '../Header/Header';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Social from '../Social/Social';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <Social />
    </LayoutContainer>

  );
};

export default Contact;
