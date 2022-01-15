import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

export default createTheme({
  palette: {
    primary: {
      main: arcOrange,
    },
    secondary: {
      main: arcBlue,
    },
  },

  typography: {
    tab: {
      // fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
  },
});
