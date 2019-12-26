
const defaultFontFamily = 'Arial, sans-serif';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  typography: {
    fontFamily: defaultFontFamily,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: '#08e',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: 'rgb(214, 216, 218)'
    },
    background: {
      paper: '#fff',
      default: '#202124',
      header: '#212121'
    }
  },
  animation: {
    linkHoveringEffect: `
      transition: color .1s cubic-bezier(.4,0,.2,1);
    `,
    imageHoveringEffect: `
      box-shadow: 0 0 0 1px rgba(255,255,255,.16);
      transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
    `
  }
};

export default theme;
