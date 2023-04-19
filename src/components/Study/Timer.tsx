import React, { useEffect, useState } from 'react';
import {
  Typography, Box,
} from '@mui/material';
import styles from './study.module.scss';

const Timer = () => {
  console.log('render Timer');
  const [secOnPage, setSecOnPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSecOnPage((v) => v + 1), 5000);
    return () => clearInterval(timer);
  }, [secOnPage]);

  return (
    <Box className={styles.container}>
      <Typography>You are here</Typography>
      <Typography>{secOnPage}</Typography>
    </Box>
  );
};

export default React.memo(Timer);
