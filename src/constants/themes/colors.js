/**
 * Common individual colors across all themes
 *
 * If a name cannot be given, use this
 * http://chir.ag/projects/name-that-color/{hex-color}
 */

const colors = {
  // Food Safety (CL Brand)
  lightModeClearSafety100: '#CCE5F0', // Food Safety 100 - Onahau
  lightModeClearSafety200: '#99CBE0', // Food Safety 200 - Anakiwa
  lightModeClearSafety300: '#66B1D1', // Food Safety 300 - Malibu
  lightModeClearSafety400: '#3397C1', // Food Safety 400 - PictonBlue
  lightModeClearSafety500: '#007DB2', // Food Safety 500 - DodgerBlue
  lightModeClearSafety600: '#00648E', // Food Safety 600 - Ochmara
  lightModeClearSafety700: '#004B6B', // Food Safety 700 - BahamaBlue
  lightModeClearSafety800: '#003247', // Food Safety 800 - RegalBlue
  lightModeClearSafety900: '#001924', // Food Safety 900 - Daintree

  // Food Safety (CL Brand - Light Mode)
  darkModeClearSafety100: '#CCF0FF', // Food Safety 100 - Onahau
  darkModeClearSafety200: '#99E0FF', // Food Safety 200 - Anakiwa
  darkModeClearSafety300: '#66D1FF', // Food Safety 300 - Malibu
  darkModeClearSafety400: '#33C1FF', // Food Safety 400 - PictonBlue
  darkModeClearSafety500: '#00B2FF', // Food Safety 500 - DodgerBlue
  darkModeClearSafety600: '#008ECC', // Food Safety 600 - Ochmara
  darkModeClearSafety700: '#006B99', // Food Safety 700 - BahamaBlue
  darkModeClearSafety800: '#004766', // Food Safety 800 - RegalBlue
  darkModeClearSafety900: '#002433', // Food Safety 900 - Daintree

  // Clear WGS (Brand)
  clearDxWgs100: '#D3FAF7', // Clear WGS 100 - Scandal
  clearDxWgs200: '#A6F5F0', // Clear WGS 200 - IceCold
  clearDxWgs300: '#7AEFE8', // Clear WGS 300 - Spray
  clearDxWgs400: '#4DEAE1', // Clear WGS 400 - TurquoiseBlue
  clearDxWgs500: '#21E5D9', // Clear WGS 500 - Turquoise
  clearDxWgs600: '#1AB7AE', // Clear WGS 600 - Java
  clearDxWgs700: '#148982', // Clear WGS 700 - SurfieGreen
  clearDxWgs800: '#0D5C57', // Clear WGS 800 - Eden
  clearDxWgs900: '#072E2B', // Clear WGS 900 - BottleGreen

  // Clear Dx (Brand)
  clearDx100: '#E3D3FD', // Clear Dx 100 - Fog
  clearDx200: '#C7A7FB', // Clear Dx 200 - Mauve
  clearDx300: '#AA7BF8', // Clear Dx 300 - Heliotrope
  clearDx400: '#8E4FF6', // Clear Dx 400 - MediumPurple
  clearDx500: '#7223F4', // Clear Dx 500 - ElectricViolet
  clearDx600: '#5B1CC3', // Clear Dx 600 - PurpleHeart
  clearDx700: '#441592', // Clear Dx 700 - PersianIndigo
  clearDx800: '#2E0E62', // Clear Dx 800 - ViolentViolet
  clearDx900: '#170731', // Clear Dx 900 - Violet

  // Grayscale - Dark Mode
  darkModeGrayscale100: '#FFFFFF', // Grayscale 100 - White
  darkModeGrayscale200: '#A6B0B9', // Grayscale 200 - Casper
  darkModeGrayscale300: '#80888E', // Grayscale 300 - Mexico
  darkModeGrayscale400: '#5F6A74', // Grayscale 400 - Nevada
  darkModeGrayscale500: '#354551', // Grayscale 500 - LightStone
  darkModeGrayscale600: '#293843', // Grayscale 600 - BigStone
  darkModeGrayscale700: '#232F37', // Grayscale 700 - Granite
  darkModeGrayscale800: '#1C252C', // Grayscale 800 - Carbon
  darkModeGrayscale900: '#151C21', // Grayscale 900 - Charcoal

  // Grayscale - Light Mode
  lightModeGrayscale100: '#FFFFFF', // Grayscale 100 - White
  lightModeGrayscale200: '#F4F7F9', // Grayscale 200 - AquaHaze
  lightModeGrayscale300: '#E5EBF1', // Grayscale 300 - Mystic
  lightModeGrayscale400: '#C6CFDA', // Grayscale 400 - Heather
  lightModeGrayscale500: '#ADB5C3', // Grayscale 500 - CadetBlue
  lightModeGrayscale600: '#8E98AB', // Grayscale 600 - Manatee
  lightModeGrayscale700: '#677287', // Grayscale 700 - PaleSky
  lightModeGrayscale800: '#474F5E', // Grayscale 800 - RiverBed
  lightModeGrayscale900: '#2A303A', // Grayscale 900 - Charade

  // Success
  success100: '#D9F2DB', // Success 100 - Peppermint
  success200: '#B4E4B8', // Success 200 - Celadon
  success300: '#8ED794', // Success 300 - Feijoa
  success400: '#69C971', // Success 400 - Mantis
  success500: '#43BC4D', // Success 500 - ChateauGreen
  success600: '#36963E', // Success 600 - Apple
  success700: '#28712E', // Success 700 - GreenPea
  success800: '#1B4B1F', // Success 800 - Everglade
  success900: '#0D260F', // Success 900 - BlackBean

  // Warning
  warning100: '#FFF1D6', // Warning 100 - PinkLady
  warning200: '#FFE3AD', // Warning 200 - NavajoWhite
  warning300: '#FFD584', // Warning 300 - Grandis
  warning400: '#FFC75B', // Warning 400 - GoldenTainoi
  warning500: '#FFB932', // Warning 500 - Sunglow
  warning600: '#CC9428', // Warning 600 - BrandyPunch
  warning700: '#996F1E', // Warning 700 - Hacienda
  warning800: '#664A14', // Warning 800 - HorsesNeck
  warning900: '#33250A', // Warning 900 - Clinker

  // Error
  error100: '#FCCCCF', // Error 100 - Cosmos
  error200: '#F8999E', // Error 200 - CornflowerLilac
  error300: '#F5666E', // Error 300 - Geraldine
  error400: '#F1333E', // Error 400 - SunsetOrange
  error500: '#EE000E', // Error 500 - TorchRed
  error600: '#BE000B', // Error 600 - Thunderbird
  error700: '#8F0008', // Error 700 - Tamarillo
  error800: '#5F0005', // Error 800 - DarkTan
  error900: '#300003', // Error 900 - Aubergine

  // Special
  specialOrange: '#FF6B2C', // Special - burningOrange

  // Full transparent
  transparent: 'transparent',
  // Modal Scrum
  lightModeModalScrim: '#00000023', // Black, 35% opacity
  lightModeModalScrimWithoutSupport: '#FFFFFFbf', // Grayscale 100 - White

  darkModeModalScrim: '#151C211a', // Grayscale 100 - White
  darkModeModalScrimWithoutSupport: '#151C21bf', // Grayscale 100 - White

  // Floorplan SVG Background
  floorplanBackground: '#2D2E32',

  /**
   * ORGANISMS COLOR LEGENDS
   * - Color selction is done in a row-directional order
   * https://www.figma.com/file/6Q9CrTMEwhhNol62PWtMA6/Design-System---LIGHT-Theme?node-id=3416%3A42897
   */
  organismAcinetobacter: '#FFAE8E',
  organismBacillus: '#FFD27A',
  organismCampylobacter: '#55EA61',
  organismClostridioides: '#8B44FF',
  organismEscherichia: '#6A8AFE',
  organismEnterobacter: '#F94F58',
  organismEnterococcus: '#E637F5',
  organismKlebsiella: '#00EBEB',
  organismListeria: '#F76A32',
  organismPseudomonas: '#FFB932',
  organismSalmonella: '#43BC4D',
  organismShigella: '#7223F4',
  organismStaphylococcus: '#5177FF',
  organismStreptococcus: '#EE000E',
  organismVibrio: '#C219D0',
  // Fallback Organism Color
  organismFallbackColor: '#008080',

  /**
    @deprecated LEGACY COLORS
  */
  // Semi-Transparent Legacy
  blackTransparent03: '#00000008',
  blackTransparent05: '#0000000d',
  blackTransparent09: '#00000017',
  blackTransparent10: '#0000001a',
  blackTransparent20: '#00000033',
  blackTransparent30: '#0000004d',
  blackTransparent60: '#00000099',
  blackTransparent75: '#000000bf',
  blackTransparent90: '#000000e6',
  whiteTransparent03: '#ffffff09',
  whiteTransparent10: '#ffffff1a',
  whiteTransparent25: '#ffffff40',
  whiteTransparent50: '#ffffff80',
  whiteTransparent75: '#ffffffbf',
};

export default colors;
