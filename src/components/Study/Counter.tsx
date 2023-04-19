import React, { useCallback, useState } from 'react';
import {
  Button, Typography, Box,
} from '@mui/material';
import styles from './study.module.scss';

interface CounterProps {
  getNumber: (num: number) => number,
}

const Counter = ({ getNumber }: CounterProps) => {
  console.log('render Counter');
  const [num, setNum] = useState(0);

  const getNewNum = useCallback(() => {
    setNum(getNumber(num));
  }, [num]);

  return (
    <Box className={styles.container}>
      <Typography>{num}</Typography>
      <Button variant="contained" onClick={getNewNum}>Get random(n/v)</Button>
    </Box>
  );
};

export default React.memo(Counter);
