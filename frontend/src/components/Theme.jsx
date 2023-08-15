import { createTheme } from '@material-ui/core/styles';
import '../style/fonts.scss'
const theme = createTheme({
  typography: {
    fontFamily: 'Fredoka',
  },
  palette: {
    background: {
      default: '#f0f0f0',
      paper: '#FaFaFa'
    },
    primary: {
      light: '#def4ff',
      main: '#00a3fe',
    },
    secondary: {
      light: '#f98bcf',
      main: '#fe00a5',
    }
  },
  MuiLink: {
    textDecoration: 'none', // Remove default underlining
    color: 'blue', // Customize link color
    '&:hover': {
      textDecoration: 'underline', // Apply underlining on hover
    },
  },
});

export { theme }