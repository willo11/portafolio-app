import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#2f2e41';

const custom = {
  black,
  white,
  transparent: 'transparent',
  primary: {
    light: '#f2f2f2',
    main: '#2898ff',
    dark: '#0c8aff',
    contrastText: white,
  },
  secondary: {
    light: '#7eaeff',
    main: '#4285f4',
    dark: '#3968b6',
    contrastText: '#fff',
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#717171',
    secondary: '#717171',
    link: colors.blue[600],
  },
  background: {
    default: white,
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};

export default custom;
