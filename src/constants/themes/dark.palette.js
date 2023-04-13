import colors from './colors';
import commonPalette from './common.palette';

// Clear Safety is the default theme
const palette = {
  ...commonPalette,

  // Grayscale shortcuts
  grayscale100: colors.darkModeGrayscale100, // #FFFFFF
  grayscale200: colors.darkModeGrayscale200, // #A6B0B9
  grayscale300: colors.darkModeGrayscale300, // #80888E
  grayscale400: colors.darkModeGrayscale400, // #62686E
  grayscale500: colors.darkModeGrayscale500, // #3F5460
  grayscale600: colors.darkModeGrayscale600, // #333F49
  grayscale700: colors.darkModeGrayscale700, // #232F37
  grayscale800: colors.darkModeGrayscale800, // #1C252C
  grayscale900: colors.darkModeGrayscale900, // #151C21

  // Brand Colors
  brand100: colors.darkModeClearSafety100, // #CCF0FF
  brand200: colors.darkModeClearSafety200, // #99E0FF
  brand300: colors.darkModeClearSafety300, // #66D1FF
  brand400: colors.darkModeClearSafety400, // #33C1FF
  brand500: colors.darkModeClearSafety500, // #00B2FF
  brand600: colors.darkModeClearSafety600, // #008ECC
  brand700: colors.darkModeClearSafety700, // #006B99
  brand800: colors.darkModeClearSafety800, // #004766
  brand900: colors.darkModeClearSafety900, // #002433

  // Brand Color Aliases
  primaryBrand: colors.darkModeClearSafety500, // #00B2FF // 500

  // Text Colors
  primaryText: colors.darkModeGrayscale100, // #FFFFFF
  secondaryText: colors.darkModeGrayscale200, // #A6B0B9
  disabledText: colors.darkModeGrayscale300, // #80888E
  linkText: colors.darkModeClearSafety500, // #00B2FF // 500

  // Border Colors
  primaryBorder: colors.darkModeGrayscale100, // #FFFFFF

  // Page Colors
  publicPageHeaderBackground: colors.darkModeGrayscale900,
  publicPageFooterBackground: colors.darkModeGrayscale900,
  pageHeaderBackground: colors.darkModeGrayscale700,
  pageHeaderBorder: colors.darkModeGrayscale800,
  pageBodyBackground: colors.darkModeGrayscale800,
  pageFooterBackground: colors.darkModeGrayscale700,
  pageFooterBorder: colors.darkModeGrayscale800,

  // Alert Colors
  alertText: colors.darkModeGrayscale100,

  alertSuccessBackground: colors.success900,
  alertSuccessBorder: colors.success500,

  alertWarningBackground: colors.warning900,
  alertWarningBorder: colors.warning500,

  alertErrorBackground: colors.error900,
  alertErrorBorder: colors.error500,

  alertInfoBackground: colors.darkModeClearSafety900,
  alertInfoBorder: colors.darkModeClearSafety500,

  // Message Colors
  messageSuccess: colors.success500, // #43BC4D
  messageSuccessBCG: colors.success900, // #0D260F
  messageLightSuccess: colors.success400, // #69C971

  messageWarning: colors.warning500, // #FFB932
  messageWarningBCG: colors.warning900, // #514525

  messageError: colors.error500, // ##FF1F2C
  messageErrorBCG: colors.error900, // #330609
  messageLightError: colors.error400, // #FF4C56
  messageErrorDisabled: colors.error800, // #660C11

  messageInfo: colors.darkModeClearSafety500, // ##00B2FF
  messageInfoBCG: colors.darkModeClearSafety900, // #002433

  // Button Colors - Text
  buttonTextPrimary: colors.darkModeGrayscale800,
  buttonTextPrimaryDisabled: colors.darkModeGrayscale200,
  buttonTextSecondary: colors.darkModeClearSafety500,
  buttonTextSecondaryDisabled: colors.darkModeGrayscale300,
  buttonTextTertiary: colors.darkModeGrayscale100,
  buttonTextTertiaryDisabled: colors.darkModeGrayscale300,

  // Button Colors - Background
  buttonPrimaryHover: colors.darkModeClearSafety200,
  buttonPrimaryPressed: colors.darkModeClearSafety300,
  buttonPrimaryFocused: colors.darkModeClearSafety600,
  buttonPrimaryOutline: colors.darkModeClearSafety700,
  buttonPrimaryDisabled: colors.darkModeClearSafety800,
  buttonSecondaryHover: colors.darkModeClearSafety200,
  buttonSecondaryPressed: colors.darkModeClearSafety300,
  buttonSecondaryFocused: colors.darkModeClearSafety600,
  buttonTertiaryBrandHover: colors.darkModeGrayscale500,
  buttonTertiaryBrandPressed: colors.darkModeGrayscale900,
  buttonTertiaryWhiteHover: colors.darkModeGrayscale500,
  buttonTertiaryWhitePressed: colors.darkModeGrayscale900,
  buttonTertiaryDarkHover: colors.darkModeGrayscale500,
  buttonTertiaryDarkPressed: colors.darkModeGrayscale900,
  buttonDanger: colors.error400, // #FF4C56
  buttonDangerHover: colors.error300, // #FF7880
  buttonDangerPressed: colors.error700, // #99121A
  buttonDangerFocused: colors.error400,
  buttonDangerDisabled: colors.error800, // #660C11
  buttonLoading: colors.darkModeGrayscale900, // #660C11

  // Avatar Colors
  avatarTextColor: colors.darkModeGrayscale800, // #1C252C
  avatarBackgroundColor: colors.darkModeGrayscale200, // #A6B0B9

  // Progress Bar
  progressBackground: colors.darkModeGrayscale900, // #151C21
  progressText: colors.darkModeGrayscale100, // #354551
  progressSecondary: colors.darkModeGrayscale700, // #232F37
  progressInitialText: colors.darkModeGrayscale900,
  progressInitialBackground: colors.darkModeGrayscale900,
  progressInitialBorder: colors.darkModeGrayscale500,

  // Large Progress Bar
  largeProgressCurrentText: colors.darkModeGrayscale100,
  largeProgressCurrentBackground: colors.darkModeGrayscale700,
  largeProgressCurrentBorder: colors.darkModeGrayscale500,
  largeProgressAlertErrorBackground: colors.error900,
  largeProgressAlertErrorBorder: colors.error500,
  largeProgressAlertReviewBackground: colors.error900,
  largeProgressAlertReviewBorder: colors.error500,
  largeProgressAlertInvalidBackground: colors.warning900,
  largeProgressAlertInvalidBorder: colors.warning500,
  largeProgressCompleteBackground: colors.darkModeGrayscale700,
  largeProgressCompleteBorder: colors.darkModeGrayscale500,

  // Cards
  cardBackgroundPrimary: colors.darkModeGrayscale600, // #333F49
  cardBackgroundSecondary: colors.darkModeGrayscale700, // #232F37
  cardBackgroundHover: colors.darkModeGrayscale500, // #3F5460
  panelBackgroundPrimary: colors.darkModeGrayscale700, // #333F49

  brandCardBackgroundPrimary: colors.darkModeClearSafety700,

  // Popups / Popovers
  popoverBackgroundPrimary: colors.darkModeGrayscale900,
  popoverBackgroundSecondary: colors.darkModeGrayscale600,
  popoverBackgroundHover: colors.darkModeGrayscale700,

  // Text Input Colors - background
  inputBackground: colors.darkModeGrayscale700,

  // Text Input Colors - text
  inputPrimary: colors.darkModeGrayscale100,
  inputDisabled: colors.darkModeGrayscale300,
  inputPlaceholder: colors.darkModeGrayscale300,
  inputPlaceholderDisabled: colors.darkModeGrayscale400,

  // Text Input Colors - border
  inputBorder: colors.darkModeGrayscale400,
  inputBorderHover: colors.darkModeGrayscale100,
  inputBorderFocused: colors.darkModeClearSafety500,
  inputBorderDisabled: colors.darkModeGrayscale500,
  inputErrorBorder: colors.error500,
  inputErrorBorderHover: colors.error300,
  inputErrorBorderFocused: colors.error500,

  // Text Input Colors - outline
  inputOutlineFocused: colors.darkModeClearSafety200,
  inputErrorOutlineFocused: colors.error800,

  // Checkbox Input Colors - outline
  checkboxOutlineFocused: colors.darkModeClearSafety200,

  // Checkbox Input - Unchecked
  checkboxUncheckedBackground: colors.darkModeGrayscale700,
  checkboxUncheckedBorder: colors.darkModeGrayscale200,
  checkboxUncheckedHoverBorder: colors.darkModeGrayscale100,
  checkboxUncheckedHoverBackground: colors.darkModeGrayscale600,
  checkboxUncheckedPressedBackground: colors.darkModeGrayscale600,
  checkboxUncheckedDisabledBorder: colors.darkModeGrayscale500,
  checkboxUncheckedDisabledBackground: colors.darkModeGrayscale700,

  // Checkbox Input - Checked
  checkboxCheckedIcon: colors.darkModeGrayscale800,
  checkboxCheckedBackground: colors.darkModeClearSafety500,
  checkboxCheckedHoverBackground: colors.darkModeClearSafety300,
  checkboxCheckedPressedBackground: colors.darkModeClearSafety700,
  checkboxCheckedDisabledIcon: colors.darkModeGrayscale300,
  checkboxCheckedDisabledBackground: colors.darkModeClearSafety800,

  // Toggle Input Colors - Outline
  toggleOutlineFocused: colors.darkModeClearSafety700,

  // Toggle Input Colors - Unchecked
  toggleUncheckedBackground: colors.darkModeGrayscale700,
  toggleUncheckedBorder: colors.darkModeGrayscale200,
  toggleUncheckedIcon: colors.darkModeGrayscale200,
  toggleUncheckedHoverBackground: colors.darkModeGrayscale600,
  toggleUncheckedHoverBorder: colors.darkModeGrayscale200,
  toggleUncheckedPressedBackground: colors.darkModeGrayscale500,
  toggleUncheckedPressedBorder: colors.darkModeGrayscale200,
  toggleUncheckedPressedIcon: colors.darkModeGrayscale100,
  toggleUncheckedDisabledBackground: colors.darkModeGrayscale700,
  toggleUncheckedDisabledBorder: colors.darkModeGrayscale600,
  toggleUncheckedDisabledIcon: colors.darkModeGrayscale300,

  // Toggle Input Colors - Checked
  toggleCheckedBackground: colors.darkModeClearSafety500,
  toggleCheckedBorder: colors.darkModeClearSafety500,
  toggleCheckedIcon: colors.darkModeGrayscale800,
  toggleCheckedHoverBackground: colors.darkModeClearSafety300,
  toggleCheckedHoverBorder: colors.darkModeClearSafety300,
  toggleCheckedPressedBackground: colors.darkModeClearSafety700,
  toggleCheckedPressedBorder: colors.darkModeClearSafety700,
  toggleCheckedDisabledBackground: colors.darkModeClearSafety800,
  toggleCheckedDisabledBorder: colors.darkModeClearSafety800,
  toggleCheckedDisabledIcon: colors.darkModeGrayscale300,

  // Radio Input Colors - outline
  radioOutlineFocused: colors.darkModeClearSafety200,

  // Radio Input - Unchecked
  radioUncheckedBackground: colors.darkModeGrayscale700,
  radioUncheckedBorder: colors.darkModeGrayscale200,
  radioUncheckedHoverBackground: colors.darkModeGrayscale600,
  radioUncheckedHoverBorder: colors.darkModeGrayscale100,
  radioUncheckedPressedBackground: colors.darkModeGrayscale600,
  radioUncheckedPressedBorder: colors.darkModeGrayscale200,
  radioUncheckedDisabledBackground: colors.darkModeGrayscale700,
  radioUncheckedDisabledBorder: colors.darkModeGrayscale500,

  // Radio Input - Checked
  radioCheckedDonut: colors.darkModeClearSafety500,
  radioCheckedHoverDonut: colors.darkModeClearSafety300,
  radioCheckedPressedDonut: colors.darkModeClearSafety700,
  radioCheckedDisabledDonut: colors.darkModeClearSafety800,

  // Radio Input - `radioBtBox`
  radioBtBoxUncheckedBackground: colors.darkModeClearSafety900,
  radioBtBoxCheckedDisabledBackground: colors.darkModeClearSafety700,
  radioBtBoxCheckedBackground: colors.darkModeClearSafety800,
  radioBtBoxCheckedBorder: colors.darkModeGrayscale400,

  // Radio Input - `smallRadioBtBox`
  smallRadioBtBoxUncheckedBorder: colors.darkModeGrayscale200,
  smallRadioBtBoxCheckedBackground: colors.darkModeGrayscale400,
  smallRadioBtBoxCheckedBorder: colors.darkModeGrayscale400,

  // Selector
  selectorUncheckedBorder: colors.darkModeGrayscale500,
  selectorUncheckedHoverBackground: colors.darkModeGrayscale700,
  selectorUncheckedHoverBorder: colors.darkModeGrayscale300,
  selectorUncheckedPressedBorder: colors.darkModeGrayscale700,
  selectorUncheckedDisabledBorder: colors.darkModeGrayscale400,
  selectorCheckedBackground: colors.darkModeClearSafety700,
  selectorCheckedBorder: colors.darkModeClearSafety100,
  selectorOutline: colors.darkModeClearSafety200,

  // Select Colors - background
  selectBackground: colors.darkModeGrayscale700,

  // Select Colors - text
  selectPrimary: colors.darkModeGrayscale100,
  selectDisabled: colors.darkModeGrayscale300,
  selectPlaceholder: colors.darkModeGrayscale300,
  selectPlaceholderDisabled: colors.darkModeGrayscale400,

  // Select Colors - border
  selectBorder: colors.darkModeGrayscale400,
  selectBorderHover: colors.darkModeGrayscale100,
  selectBorderFocused: colors.darkModeClearSafety500,
  selectBorderDisabled: colors.darkModeGrayscale500,
  selectErrorBorder: colors.error500,
  selectErrorBorderHover: colors.error300,
  selectErrorBorderFocused: colors.error500,

  // Select Colors - outline
  selectOutlineFocused: colors.darkModeClearSafety200,
  selectErrorOutlineFocused: colors.error800,

  // Dropdown
  dropdownBackground: colors.darkModeGrayscale600,
  dropdownItemDefaultBackground: colors.darkModeGrayscale600,
  dropdownItemHoverBackground: colors.darkModeGrayscale500,
  dropdownItemActiveButtonBackground: colors.darkModeClearSafety900,
  dropdownItemActiveButtonColor: colors.darkModeClearSafety900,
  dropdownItemPressedBackground: colors.darkModeGrayscale400,
  dropdownItemActiveIconBackground: colors.darkModeClearSafety500,
  dropdownItemDisabled: colors.darkModeGrayscale300,
  dropdownTagBackground: colors.darkModeGrayscale900,
  dropdownTagRemoveHover: colors.darkModeGrayscale300,

  // Overlay
  overlayBackground: colors.darkModeGrayscale600,
  overlayRemoveHover: colors.darkModeGrayscale300,

  // Scrollbar
  scrollbarBackground: colors.darkModeGrayscale800,
  scrollbarCornerBackground: colors.darkModeGrayscale800,
  scrollbarModalBackground: colors.darkModeGrayscale600,
  scrollbarModalCornerBackground: colors.darkModeGrayscale800,
  scrollbarOverlayBackground: colors.darkModeGrayscale600,
  scrollbarOverlayCornerBackground: colors.darkModeGrayscale600,

  // Datepicker
  datepickerBackground: colors.darkModeGrayscale700,
  datepickerTableBackground: colors.darkModeGrayscale600,
  datepickerSelectedDayBackground: colors.darkModeClearSafety500,
  datepickerSpanDayBackground: colors.darkModeClearSafety300,

  // Calendar (FullCalendar)
  calendarBackgroundColor: colors.darkModeGrayscale100,
  calendarDayBackgroundColor: colors.success800,

  // SVG - Zone
  zoneFill: colors.darkModeGrayscale900, // #151C21

  // Modal
  modalScrimBackground: colors.darkModeModalScrim,
  modalScrimWithoutSupport: colors.darkModeModalScrimWithoutSupport,
  modalBackground: colors.darkModeGrayscale600,
  modalText: colors.darkModeGrayscale100,
  modalContentText: colors.lightModeGrayscale200,
  modalFooterBackground: colors.darkModeGrayscale500,

  // Table
  tableBackground: colors.darkModeGrayscale600,
  tableHeaderBorder: colors.darkModeGrayscale200,
  tableRowBackground: colors.darkModeGrayscale600,
  tableRowInvalidBackground: colors.warning900,
  tableRowInvalidHoverBackground: colors.warning800,
  tableZebraRowBackground: colors.darkModeGrayscale600,
  tableRowHoverBackground: colors.darkModeGrayscale500,
  tableRowPressedBackground: colors.darkModeGrayscale400,
  tableRowFocusedOutline: colors.darkModeClearSafety200,
  tableRowErrorBackground: colors.error900,
  tableRowErrorHoverBackground: colors.error200,
  tableRowWarningBackground: colors.warning900,
  filledTableHeaderBackground: colors.darkModeGrayscale400,

  // Upload
  uploadDnDBackground: colors.darkModeGrayscale800,

  // Slider
  sliderConnectBackground: colors.darkModeClearSafety500,
  sliderHandleBackground: colors.darkModeClearSafety500,
  sliderHandleHoverBackground: colors.darkModeClearSafety300,
  sliderHandlePressedBackground: colors.darkModeClearSafety700,
  sliderHandleFocusedOutline: colors.darkModeClearSafety200,
  sliderHorizontalBackground: colors.darkModeGrayscale500,
  sliderTooltipBackground: colors.darkModeClearSafety500,
  sliderTooltipColor: colors.darkModeGrayscale100,

  // Accordion Colors
  accordionBackgroundExpanded: colors.darkModeGrayscale500,
  accordionBackgroundCollapsed: colors.darkModeGrayscale600,
  accordionBorder: colors.darkModeGrayscale500,
  accordionColors: colors.darkModeGrayscale100,
  accordionLabelTextColor: colors.darkModeGrayscale200,

  // Chips and Tags
  badgeColor: colors.darkModeGrayscale100,
  positiveResultBadgeText: colors.darkModeGrayscale100,
  positiveResultBadgeBackgroundColor: colors.error700,

  // wizard stepper colors
  wizardIndicatorBackgroundColorActive: colors.darkModeGrayscale600,
  wizardIndicatorBorderActive: colors.darkModeGrayscale600,
  wizardIndicatorBorderInactive: colors.darkModeGrayscale600,
  wizardIndicatorColorActive: colors.darkModeGrayscale100,
  wizardIndicatorColorInActive: colors.darkModeGrayscale100,
  wizardIndicatorTextColorActive: colors.darkModeGrayscale100,
  wizardIndicatorTextColorInActive: colors.darkModeGrayscale100,
  wizardIndicatorTextColorInActiveHover: colors.darkModeGrayscale100,

  // Floor Plan Sample Site
  sampleSiteCircle: colors.darkModeClearSafety500,
  sampleSiteCollectionCircle: colors.darkModeClearSafety700,

  // Pagination
  paginationBorder: colors.darkModeGrayscale400,
  paginationTextColor: colors.darkModeGrayscale400,
  paginationHoverActiveStates: colors.darkModeClearSafety500,
  paginationFocusOutline: colors.darkModeClearSafety800,
  paginationDisabledBorder: colors.darkModeGrayscale500,
  paginationDisabledColor: colors.darkModeGrayscale400,
  paginationSelectedColor: colors.darkModeClearSafety500,

  // Tabs
  tabNormal: colors.darkModeGrayscale200,
  tabHover: colors.darkModeClearSafety500,
  tabPressed: colors.darkModeClearSafety700,
  tabSelected: colors.darkModeClearSafety500,
  tabFocusOutline: colors.darkModeClearSafety200,
  tabDisabled: colors.darkModeGrayscale300,

  // Avatar Dropdown
  avatarDropdownBorder: colors.darkModeGrayscale300,
  avatarDropdownIconColor: colors.darkModeGrayscale100,

  // Breadcrumb
  breadcrumbDefault: colors.darkModeGrayscale200,
  breadcrumbActive: colors.darkModeGrayscale100,
  breadcrumbDefaultHover: colors.darkModeClearSafety500,
  breadcrumbDefaultPressed: colors.darkModeClearSafety700,
  breadcrumbFocusedOutline: colors.darkModeClearSafety200,

  // Icon Illustrations
  illustrationCurrentColor: colors.darkModeGrayscale500,

  // Strength Indicator Bar
  strengthIndicatorBarNeutral: colors.darkModeGrayscale200,
  strengthIndicatorBarPoor: colors.error400,
  strengthIndicatorBarOkay: colors.specialOrange,
  strengthIndicatorBarExcellent: colors.success400,

  // Number Circle
  numberCircleTextColor: colors.darkModeGrayscale800,
  numberCircleTextColorActive: colors.darkModeGrayscale800,
  numberCircleTextColorDisabled: colors.darkModeGrayscale800,

  // RackPreview
  rackPreviewCapacityMeterBackground: colors.darkModeGrayscale700,
  rackPreviewSequencerIconBackground: colors.darkModeGrayscale700,

  // Iseq status
  iseqStatusSuccess: colors.darkModeGrayscale700,
  iseqStatusFailed: colors.error800,

  // Rack icon well color
  rackWellDefaultAvailableBackground: colors.darkModeGrayscale900,
  rackWellDefaultAvailablePrintBackground: colors.lightModeGrayscale700,
  rackWellDefaultUnAvailableBackground: colors.darkModeGrayscale500,
  rackWellDefaultUnAvailablePrintBackground: colors.lightModeGrayscale400,

  // Sequencer Progress Bar
  sequencerProgressBar: colors.brand200,
  sequencerCount: colors.darkModeGrayscale700,
};

export default palette;
