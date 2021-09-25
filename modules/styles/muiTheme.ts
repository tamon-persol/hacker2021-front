import { createTheme } from '@material-ui/core/styles';

// NOTE: https://material-ui.com/customization/default-theme/
export const theme = createTheme({
  palette: {
    common: {
      black: '#23252D'
    },
    primary: {
      main: '#3F60EB',
      dark: '#392FD4'
    },
    secondary: {
      main: '#97999B',
      dark: '#56595F',
      light: '#E8E4E4'
    },
    error: {
      main: '#FF1834'
    },
    background: {
      default: '#F8F8F'
    }
  }
});
