import { THEME_MODE_LIGHT, THEME_MODE_DARK } from '../themeMode';
import darkPalette from './dark.palette';
import fonts from './fonts';
import lightPalette from './light.palette';

export const sizes = {
  maxWidth: '1100px',
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const zIndex = {
  STICKY: 5,
  DROPDOWN: 10,
  POPOVER: 15,
  OVERLAY: 20,
  TOOLTIP: 25,
  MODAL: 9990,
  MODAL_DROPDOWN: 9995,
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`,
};

export const fontSizes = {
  h1: '2.2rem',
  h2: '1.8rem',
  h3: '1.6rem',
  h4: '1.4rem',
  h5: '1.2rem',
  h6: '1.1rem',
};
export const lineHeights = {
  h1: '2.6rem',
  h2: '2.4rem',
  h3: '2.0rem',
  h4: '1.8rem',
  h5: '1.6rem',
  h6: '1.4rem',
};

const commonTheme = {
  devices,
  fonts,
  fontSizes,
  lineHeights,
  sizes,
  zIndex,
};

// Dark Theme
const commonDarkTheme = {
  ...commonTheme,
  mode: THEME_MODE_DARK,
  palette: darkPalette,
};

// Light Theme
const commonLightTheme = {
  ...commonTheme,
  mode: THEME_MODE_LIGHT,
  palette: lightPalette,
};

export default commonLightTheme;

export { commonLightTheme, commonDarkTheme };
