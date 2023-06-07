import { createTheme } from '@mui/material/styles';
/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#f2f2f2',
    },
    text: {
      primary: '#11111',
    },
  },
  typography: {
    h4: {
      fontFamily: 'Heebo',
      fontSize: 14,
      color: '#fff',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    h2: {
      fontFamily: 'Heebo',
      fontSize: 22,
      color: '#fff',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    body2: {
      fontFamily: 'Lobster',
      fontSize: 38,
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#222',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    h4: {
      fontFamily: 'Heebo',
      fontSize: 14,
      color: '#fff',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    h2: {
      fontFamily: 'Heebo',
      fontSize: 22,
      color: '#fff',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    body2: {
      fontFamily: 'Lobster',
      fontSize: 38,
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
  },
});

export { darkTheme, lightTheme };
