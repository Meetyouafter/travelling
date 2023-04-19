import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Header from '../Header/Header';
import styles from './layoutContainer.module.scss';

interface LayoutContainerProps {
  children: ReactNode;
}

const LayoutContainer = ({ children }: LayoutContainerProps) => (
  <Container disableGutters className={styles.wrapper}>
    <Header />
    {children}
  </Container>
);

export default LayoutContainer;
