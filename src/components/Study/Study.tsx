import React, { useCallback, useEffect, useState } from 'react';
import {
  Button, Container, Typography, Box,
} from '@mui/material';
import styles from './study.module.scss';
import Counter from './Counter';
import Timer from './Timer';

const DATA = 50;

const Study = () => {
  console.log('render Root');
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [value, setValue] = useState(DATA);

  const getNumber = useCallback((number: number): number => {
    const pre = Math.floor(Math.random() * 50) * number + 8;
    return pre;
  }, []);

  const handleClickAdd3 = () => {
    setNewCount((v) => v + 1);
    setNewCount((v) => v + 1);
    setNewCount((v) => v + 1);
  };

  return (
    <Container>
      <Box className={styles.container}>
        <Typography>{count}</Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>+ 1</Button>
      </Box>

      <Box className={styles.container}>
        <Typography>{newCount}</Typography>
        <Button variant="contained" onClick={() => setNewCount((prevNewCount) => prevNewCount + 1)}>+ 1</Button>
        <Button variant="contained" onClick={handleClickAdd3}>+3</Button>
      </Box>

      <Box className={styles.container}>
        <Typography>{value}</Typography>
        <Button variant="contained" onClick={() => setValue(value + 1)}>+ 1</Button>
      </Box>

      <Timer />
      <Counter getNumber={getNumber} />
    </Container>
  );
};

export default Study;
