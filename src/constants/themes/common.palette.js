import colors from './colors';

const palette = {
  // Imported common colors across all themes
  ...colors,

  // Special Colors
  specialAdHoc: [colors.specialOrange[0]], // #FF6B2C
  specialDetected: [colors.error900[0]], // #3F242D

  // Sample Color Codes
  sampleColorCodeInRun: [colors.darkModeClearSafety400[0]], // #33C1FF
  sampleColorCodeRegistered: [colors.darkModeGrayscale400[0]], // #5F6A74
  sampleColorCodeResultInvalid: [colors.specialOrange[0]], // #FF6B2C
  sampleColorCodeResultNegative: [colors.success400[0]], // #69C971
  sampleColorCodeResultPositive: [colors.error400[0]], // #FF4C56
  sampleColorCodeResusltNotSet: [colors.error700[0]], // #99121A

  // Sidebar Navigation Colors
  sidebarNavigationBorder: [colors.darkModeClearSafety500[0]],
  sidebarNavigationItemColor: [colors.darkModeGrayscale200[0]], // #A6B0B9
  sidebarNavigationItemActiveColor: [colors.darkModeClearSafety500[0]], // #00B2FF primaryBrand
  sidebarNavigationItemBackground: [colors.darkModeGrayscale700[0]], // #232F37
  sidebarNavigationItemActiveBackground: [colors.darkModeGrayscale600[0]], // #293843
  sidebarNavigationPortalIcon: [colors.darkModeGrayscale100[0]],
  sidebarNavigationPortalIconHover: [colors.darkModeGrayscale300[0]],

  // General Boxshadow
  elevation1: ['rgba(0, 0, 0, 0.1)'],
  elevation2: ['rgba(0, 0, 0, 0.15)'],

  // CL Logo
  clearlabsLogoColor: [colors.darkModeClearSafety500[0]],
};

export default palette;
