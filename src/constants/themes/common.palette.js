import colors from './colors';

const palette = {
  // Imported common colors across all themes
  ...colors,

  // Special Colors
  specialAdHoc: colors.specialOrange, // #FF6B2C
  specialDetected: colors.error900, // #3F242D

  // Sample Color Codes
  sampleColorCodeInRun: colors.darkModeClearSafety400, // #33C1FF
  sampleColorCodeRegistered: colors.darkModeGrayscale400, // #5F6A74
  sampleColorCodeResultInvalid: colors.specialOrange, // #FF6B2C
  sampleColorCodeResultNegative: colors.success400, // #69C971
  sampleColorCodeResultPositive: colors.error400, // #FF4C56
  sampleColorCodeResusltNotSet: colors.error700, // #99121A

  // Sidebar Navigation Colors
  sidebarNavigationBorder: colors.darkModeClearSafety500,
  sidebarNavigationItemColor: colors.darkModeGrayscale200, // #A6B0B9
  sidebarNavigationItemActiveColor: colors.darkModeClearSafety500, // #00B2FF primaryBrand
  sidebarNavigationItemBackground: colors.darkModeGrayscale700, // #232F37
  sidebarNavigationItemActiveBackground: colors.darkModeGrayscale600, // #293843
  sidebarNavigationPortalIcon: colors.darkModeGrayscale100,
  sidebarNavigationPortalIconHover: colors.darkModeGrayscale300,

  // General Boxshadow
  elevation1: 'rgba(0, 0, 0, 0.1)',
  elevation2: 'rgba(0, 0, 0, 0.15)',

  // CL Logo
  clearlabsLogoColor: colors.darkModeClearSafety500,
};

export default palette;
