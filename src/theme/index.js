import { createTheme } from '@mui/material/styles';
import components from './components';
import customTypography from './customTypography';

const palette = {
  primary: {
    main: '#8C33E6',
    light: '#C387FF',
    dark: '#6916BD',
  },
  secondary: {
    main: '#47A9FF',
    light: '#E5F1FF',
    dark: '#3384DB',
    contrastText: '#ffffff',
  },
  error: {
    main: '#FF4C4C',
  },
  success: {
    main: '#00E574',
    contrastText: '#ffffff',
  },
  default: {
    main: '#A0A3BD',
  },
  grey: {
    body: '#4E4B66',
  },
  marketing_grey: {
    light: '#F2F4F7',
    main: '#475467'
  },
  marketing_primary: {
    light: '#F3F0FF',
    main: '#C9B5FD',
    dark: '#7527DA',
    gradient: 'linear-gradient(#9c1eff, #2d0077)',
  }
};

// Create a theme instance.
let theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: 'DM sans',
    htmlFontSize: 10,
  },
});

theme = createTheme(theme, {
  typography: {
    ...theme.typography,
    ...customTypography(theme),
  },
});

theme = createTheme(theme,{
  components: components(theme),
});

export default theme;
