import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#001D6E',
      light: '#1A3B8E',
      dark: '#00144D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFEB3B',
      light: '#FFF176',
      dark: '#FBC02D',
      contrastText: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#1D1D1F', // Apple-like primary text
      secondary: '#6E6E73', // Apple-like secondary text
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.022em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.021em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.019em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.017em',
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.5,
      letterSpacing: '-0.011em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40, // More Apple-like rounded buttons
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#001D6E',
          '&:hover': {
            backgroundColor: '#1A3B8E',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;
