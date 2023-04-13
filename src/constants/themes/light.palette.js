import colors from './colors';
import commonPalette from './common.palette';

// Clear Safety is the default theme
const palette = {
  ...commonPalette,

  // Grayscale shortcuts
  grayscale100: colors.lightModeGrayscale100, // 0 #FFFFFF
  grayscale200: colors.lightModeGrayscale200, // 2 #F4F7F9
  grayscale300: colors.lightModeGrayscale300, // 3 #E5EBF1
  grayscale400: colors.lightModeGrayscale400, // 4 #C6CFDA
  grayscale500: colors.lightModeGrayscale500, // 5 #ADB5C3
  grayscale600: colors.lightModeGrayscale600, // 6 #8E98AB
  grayscale700: colors.lightModeGrayscale700, // 7 #677287
  grayscale800: colors.lightModeGrayscale800, // 8 #474F5E
  grayscale900: colors.lightModeGrayscale900, // 9 #2A303A

  // Brand Colors
  brand100: colors.lightModeClearSafety100, // #CCF0FF
  brand200: colors.lightModeClearSafety200, // #99E0FF
  brand300: colors.lightModeClearSafety300, // #66D1FF
  brand400: colors.lightModeClearSafety400, // #33C1FF
  brand500: colors.lightModeClearSafety500, // #00B2FF
  brand600: colors.lightModeClearSafety600, // #008ECC
  brand700: colors.lightModeClearSafety700, // #006B99
  brand800: colors.lightModeClearSafety800, // #004766
  brand900: colors.lightModeClearSafety900, // #002433

  // Brand Color Aliases
  primaryBrand: colors.lightModeClearSafety500, // #00B2FF // 500

  // Text Colors
  primaryText: colors.lightModeGrayscale900, // #2A303A
  secondaryText: colors.lightModeGrayscale700, // #677287
  disabledText: colors.lightModeGrayscale600, // #8E98AB
  linkText: colors.lightModeClearSafety600, // #008ECC // 600

  // Border Colors
  primaryBorder: colors.lightModeGrayscale900, // #FFFFFF

  // Page Colors
  publicPageHeaderBackground: colors.lightModeGrayscale100,
  publicPageFooterBackground: colors.lightModeGrayscale100,
  pageHeaderBackground: colors.lightModeGrayscale100,
  pageHeaderBorder: colors.lightModeGrayscale300,
  pageBodyBackground: colors.lightModeGrayscale200,
  pageFooterBackground: colors.lightModeGrayscale100,
  pageFooterBorder: colors.lightModeGrayscale300,

  // Alert Colors
  alertText: colors.lightModeGrayscale900,

  alertSuccessBackground: colors.success100,
  alertSuccessBorder: colors.success500,

  alertWarningBackground: colors.warning100,
  alertWarningBorder: colors.warning500,

  alertErrorBackground: colors.error100,
  alertErrorBorder: colors.error500,

  alertInfoBackground: colors.lightModeClearSafety100,
  alertInfoBorder: colors.lightModeClearSafety500,

  // Message Colors
  messageSuccess: colors.success500, // #43BC4D
  messageSuccessBCG: colors.success100, // #0D260F
  messageLightSuccess: colors.success400, // #69C971

  messageWarning: colors.warning500, // #FFB932
  messageWarningBCG: colors.warning100, // #514525

  messageError: colors.error500, // ##FF1F2C
  messageErrorBCG: colors.error100, // #330609
  messageLightError: colors.error400, // #FF4C56
  messageErrorDisabled: colors.error800, // #660C11

  messageInfo: colors.lightModeClearSafety500, // ##00B2FF
  messageInfoBCG: colors.lightModeClearSafety100, // #002433

  // Button Colors - Text
  buttonTextPrimary: colors.lightModeGrayscale100,
  buttonTextPrimaryDisabled: colors.lightModeGrayscale700,
  buttonTextSecondary: colors.lightModeClearSafety600,
  buttonTextSecondaryDisabled: colors.lightModeGrayscale600,
  buttonTextTertiary: colors.lightModeGrayscale900,
  buttonTextTertiaryDisabled: colors.lightModeGrayscale600,

  // Button Colors - Background
  buttonPrimaryHover: colors.lightModeClearSafety600,
  buttonPrimaryPressed: colors.lightModeClearSafety400,
  buttonPrimaryFocused: colors.lightModeClearSafety500,
  buttonPrimaryOutline: colors.lightModeClearSafety700,
  buttonPrimaryDisabled: colors.lightModeClearSafety200,
  buttonSecondaryHover: colors.lightModeClearSafety600,
  buttonSecondaryPressed: colors.lightModeClearSafety400,
  buttonSecondaryFocused: colors.lightModeClearSafety600,
  buttonTertiaryBrandHover: colors.lightModeGrayscale300,
  buttonTertiaryBrandPressed: colors.lightModeGrayscale400,
  buttonTertiaryWhiteHover: colors.lightModeGrayscale300,
  buttonTertiaryWhitePressed: colors.lightModeGrayscale400,
  buttonTertiaryDarkHover: colors.darkModeGrayscale500,
  buttonTertiaryDarkPressed: colors.darkModeGrayscale900,
  buttonDanger: colors.error500,
  buttonDangerHover: colors.error600,
  buttonDangerPressed: colors.error700,
  buttonDangerFocused: colors.error500,
  buttonDangerDisabled: colors.error200,
  buttonLoading: colors.lightModeGrayscale400, // #660C11

  // Avatar Colors
  avatarBackgroundColor: colors.lightModeGrayscale700, // #677287
  avatarTextColor: colors.lightModeGrayscale100, // #FFFFFF

  // Progress Bar
  progressBackground: colors.lightModeGrayscale900, // #151C21
  progressText: colors.lightModeGrayscale900, // #354551
  progressSecondary: colors.lightModeGrayscale700, // #232F37
  progressInitialText: colors.lightModeGrayscale900,
  progressInitialBackground: colors.lightModeGrayscale300,
  progressInitialBorder: colors.lightModeGrayscale400,

  // Large Progress Bar
  largeProgressCurrentText: colors.lightModeGrayscale900,
  largeProgressCurrentBackground: colors.lightModeClearSafety100,
  largeProgressCurrentBorder: colors.lightModeClearSafety500,
  largeProgressAlertErrorBackground: colors.error100,
  largeProgressAlertErrorBorder: colors.error600,
  largeProgressAlertReviewBackground: colors.error100,
  largeProgressAlertReviewBorder: colors.error600,
  largeProgressAlertInvalidBackground: colors.warning100,
  largeProgressAlertInvalidBorder: colors.warning600,
  largeProgressCompleteBackground: colors.success100,
  largeProgressCompleteBorder: colors.success600,

  // Cards
  cardBackgroundPrimary: colors.lightModeGrayscale100, // #FFFFFF
  cardBackgroundSecondary: colors.lightModeGrayscale200, // #F4F7F9
  cardBackgroundHover: colors.lightModeGrayscale300, // #E5EBF1
  panelBackgroundPrimary: colors.lightModeGrayscale100, // #FFFFFF

  brandCardBackgroundPrimary: colors.lightModeClearSafety100,

  // Popups / Popovers
  popoverBackgroundPrimary: colors.lightModeGrayscale100, // #FFFFFF
  popoverBackgroundSecondary: colors.lightModeGrayscale200, // #F4F7F9
  popoverBackgroundHover: colors.lightModeGrayscale300, // #E5EBF1

  // Text Input Colors - background
  inputBackground: colors.lightModeGrayscale100,

  // Text Input Colors - text
  inputPrimary: colors.lightModeGrayscale900,
  inputDisabled: colors.lightModeGrayscale600,
  inputPlaceholder: colors.lightModeGrayscale600,
  inputPlaceholderDisabled: colors.lightModeGrayscale500,

  // Text Input Colors - border
  inputBorder: colors.lightModeGrayscale500,
  inputBorderHover: colors.lightModeGrayscale900,
  inputBorderFocused: colors.lightModeClearSafety500,
  inputBorderDisabled: colors.lightModeGrayscale300,
  inputErrorBorder: colors.error500,
  inputErrorBorderHover: colors.error600,
  inputErrorBorderFocused: colors.error500,

  // Text Input Colors - outline
  inputOutlineFocused: colors.lightModeClearSafety200,
  inputErrorOutlineFocused: colors.error200,

  // Checkbox Input Colors
  checkboxOutlineFocused: colors.lightModeClearSafety700,

  // Checkbox Input - Unchecked
  checkboxUncheckedBackground: colors.lightModeGrayscale100,
  checkboxUncheckedBorder: colors.lightModeGrayscale700,
  checkboxUncheckedHoverBorder: colors.lightModeGrayscale700,
  checkboxUncheckedHoverBackground: colors.lightModeGrayscale300,
  checkboxUncheckedPressedBackground: colors.lightModeGrayscale400,
  checkboxUncheckedDisabledBorder: colors.lightModeGrayscale300,
  checkboxUncheckedDisabledBackground: colors.lightModeGrayscale100,

  // Checkbox Input - Checked
  checkboxCheckedIcon: colors.lightModeGrayscale100,
  checkboxCheckedBackground: colors.lightModeClearSafety500,
  checkboxCheckedHoverBackground: colors.lightModeClearSafety600,
  checkboxCheckedPressedBackground: colors.lightModeClearSafety400,
  checkboxCheckedDisabledIcon: colors.lightModeGrayscale700,
  checkboxCheckedDisabledBackground: colors.lightModeClearSafety200,

  // Toggle Input Colors
  toggleOutlineFocused: colors.lightModeClearSafety700,

  // Toggle Input Colors - Unchecked
  toggleUncheckedBackground: colors.lightModeGrayscale100,
  toggleUncheckedBorder: colors.lightModeGrayscale700,
  toggleUncheckedIcon: colors.lightModeGrayscale700,
  toggleUncheckedHoverBackground: colors.lightModeGrayscale300,
  toggleUncheckedHoverBorder: colors.lightModeGrayscale700,
  toggleUncheckedPressedBackground: colors.lightModeGrayscale400,
  toggleUncheckedPressedBorder: colors.lightModeGrayscale700,
  toggleUncheckedPressedIcon: colors.lightModeGrayscale700,
  toggleUncheckedDisabledBackground: colors.lightModeGrayscale100,
  toggleUncheckedDisabledBorder: colors.lightModeGrayscale300,
  toggleUncheckedDisabledIcon: colors.lightModeGrayscale300,

  // Toggle Input Colors - Checked
  toggleCheckedBackground: colors.lightModeClearSafety500,
  toggleCheckedBorder: colors.lightModeClearSafety500,
  toggleCheckedIcon: colors.lightModeGrayscale100,
  toggleCheckedHoverBackground: colors.lightModeClearSafety600,
  toggleCheckedHoverBorder: colors.lightModeClearSafety600,
  toggleCheckedPressedBackground: colors.lightModeClearSafety400,
  toggleCheckedPressedBorder: colors.lightModeClearSafety400,
  toggleCheckedDisabledBackground: colors.lightModeClearSafety200,
  toggleCheckedDisabledBorder: colors.lightModeClearSafety200,
  toggleCheckedDisabledIcon: colors.lightModeGrayscale700,

  // Radio Input Colors
  radioOutlineFocused: colors.lightModeClearSafety700,

  // Radio Input - Unchecked
  radioUncheckedBackground: colors.lightModeGrayscale100,
  radioUncheckedBorder: colors.lightModeGrayscale700,
  radioUncheckedHoverBackground: colors.lightModeGrayscale300,
  radioUncheckedHoverBorder: colors.lightModeGrayscale700,
  radioUncheckedPressedBackground: colors.lightModeGrayscale400,
  radioUncheckedPressedBorder: colors.lightModeGrayscale700,
  radioUncheckedDisabledBackground: colors.lightModeGrayscale100,
  radioUncheckedDisabledBorder: colors.lightModeGrayscale300,

  // Radio Input - Checked
  radioCheckedDonut: colors.lightModeClearSafety500,
  radioCheckedHoverDonut: colors.lightModeClearSafety600,
  radioCheckedPressedDonut: colors.lightModeClearSafety400,
  radioCheckedDisabledDonut: colors.lightModeClearSafety200,

  // Radio Input - `radioBtBox`
  radioBtBoxUncheckedBackground: colors.lightModeGrayscale200,
  radioBtBoxCheckedDisabledBackground: colors.lightModeGrayscale100,
  radioBtBoxCheckedBackground: colors.lightModeGrayscale100,
  radioBtBoxCheckedBorder: colors.lightModeGrayscale400,

  // Radio Input - `smallRadioBtBox`
  smallRadioBtBoxUncheckedBorder: colors.lightModeGrayscale500,
  smallRadioBtBoxCheckedBackground: colors.lightModeClearSafety100,
  smallRadioBtBoxCheckedBorder: colors.lightModeClearSafety500,

  // Selector
  selectorUncheckedBorder: colors.lightModeGrayscale500,
  selectorUncheckedHoverBackground: colors.lightModeGrayscale300,
  selectorUncheckedHoverBorder: colors.lightModeGrayscale900,
  selectorUncheckedPressedBorder: colors.lightModeGrayscale400,
  selectorUncheckedDisabledBorder: colors.lightModeGrayscale300,
  selectorCheckedBackground: colors.lightModeClearSafety100,
  selectorCheckedBorder: colors.lightModeClearSafety500,
  selectorOutline: colors.lightModeClearSafety200,

  // Select Colors - background
  selectBackground: colors.lightModeGrayscale100,

  // Select Colors - text
  selectPrimary: colors.lightModeGrayscale900,
  selectDisabled: colors.lightModeGrayscale600,
  selectPlaceholder: colors.lightModeGrayscale600,
  selectPlaceholderDisabled: colors.lightModeGrayscale500,

  // Select Colors - border
  selectBorder: colors.lightModeGrayscale500,
  selectBorderHover: colors.lightModeGrayscale900,
  selectBorderFocused: colors.lightModeClearSafety500,
  selectBorderDisabled: colors.lightModeGrayscale300,
  selectErrorBorder: colors.error500,
  selectErrorBorderHover: colors.error600,
  selectErrorBorderFocused: colors.error500,

  // Select Colors - outline
  selectOutlineFocused: colors.lightModeClearSafety200,
  selectErrorOutlineFocused: colors.error200,

  // Dropdown
  dropdownBackground: colors.lightModeGrayscale100,
  dropdownItemDefaultBackground: colors.lightModeGrayscale100,
  dropdownItemHoverBackground: colors.lightModeGrayscale300,
  dropdownItemPressedBackground: colors.lightModeGrayscale400,
  dropdownItemActiveIconBackground: colors.lightModeClearSafety500,
  dropdownItemActiveButtonBackground: colors.lightModeClearSafety400,
  dropdownItemActiveButtonColor: colors.lightModeGrayscale100,
  dropdownItemDisabled: colors.lightModeGrayscale600,
  dropdownTagBackground: colors.lightModeGrayscale300,
  dropdownTagRemoveHover: colors.lightModeGrayscale600,

  // Overlay
  overlayBackground: colors.lightModeGrayscale100,
  overlayRemoveHover: colors.lightModeGrayscale600,

  // Scrollbar
  scrollbarBackground: colors.lightModeGrayscale200,
  scrollbarCornerBackground: colors.lightModeGrayscale400,
  scrollbarModalBackground: colors.lightModeGrayscale200,
  scrollbarModalCornerBackground: colors.lightModeGrayscale600,
  scrollbarOverlayBackground: colors.lightModeGrayscale100,
  scrollbarOverlayCornerBackground: colors.lightModeGrayscale100,

  // Datepicker
  datepickerBackground: colors.lightModeGrayscale100,
  datepickerTableBackground: colors.lightModeGrayscale200,
  datepickerSelectedDayBackground: colors.lightModeClearSafety500,
  datepickerSpanDayBackground: colors.lightModeClearSafety200,

  // Calendar (FullCalendar)
  calendarBackgroundColor: colors.lightModeGrayscale100,
  calendarDayBackgroundColor: colors.success100,

  // SVG - Zone
  zoneFill: colors.lightModeGrayscale400,

  // Modal
  modalScrimBackground: colors.lightModeModalScrim,
  modalScrimWithoutSupport: colors.lightModeModalScrimWithoutSupport,
  modalBackground: colors.lightModeGrayscale100,
  modalText: colors.lightModeGrayscale900,
  modalContentText: colors.lightModeGrayscale700,
  modalFooterBackground: colors.lightModeGrayscale200,

  // Table
  tableBackground: colors.lightModeGrayscale100,
  tableHeaderBorder: colors.lightModeGrayscale300,
  tableRowBackground: colors.lightModeGrayscale100,
  tableRowInvalidBackground: colors.warning100,
  tableZebraRowBackground: colors.lightModeGrayscale100,
  tableRowHoverBackground: colors.lightModeGrayscale300,
  tableRowPressedBackground: colors.lightModeGrayscale400,
  tableRowFocusedOutline: colors.lightModeClearSafety700,
  tableRowErrorBackground: colors.error100,
  tableRowErrorHoverBackground: colors.error200,
  tableRowWarningBackground: colors.warning100,
  filledTableHeaderBackground: colors.lightModeGrayscale400,

  // Upload
  uploadDnDBackground: colors.lightModeGrayscale300,

  // Slider
  sliderConnectBackground: colors.lightModeClearSafety500,
  sliderHandleBackground: colors.lightModeClearSafety500,
  sliderHandleHoverBackground: colors.lightModeClearSafety300,
  sliderHandlePressedBackground: colors.lightModeClearSafety700,
  sliderHandleFocusedOutline: colors.lightModeClearSafety200,
  sliderHorizontalBackground: colors.lightModeGrayscale400,
  sliderTooltipBackground: colors.lightModeClearSafety500,
  sliderTooltipColor: colors.lightModeGrayscale100,

  // Accordion Colors
  accordionBackgroundExpanded: colors.lightModeGrayscale200,
  accordionBackgroundCollapsed: colors.lightModeGrayscale100,
  accordionBorder: colors.lightModeGrayscale300,
  accordionColors: colors.lightModeGrayscale700,
  accordionLabelTextColor: colors.lightModeGrayscale700,

  // Chips and Tags
  badgeColor: colors.lightModeGrayscale100,
  positiveResultBadgeText: colors.darkModeGrayscale100,
  positiveResultBadgeBackgroundColor: colors.error600,

  // wizard stepper colors
  wizardIndicatorBackgroundColorActive: colors.lightModeClearSafety500,
  wizardIndicatorBackgroundColorInActive: colors.lightModeGrayscale100,
  wizardIndicatorBorderActive: colors.lightModeClearSafety500,
  wizardIndicatorBorderInactive: colors.lightModeGrayscale600,
  wizardIndicatorColorActive: colors.lightModeGrayscale100,
  wizardIndicatorColorInActive: colors.lightModeGrayscale600,
  wizardIndicatorTextColorActive: colors.lightModeClearSafety500,
  wizardIndicatorTextColorInActive: colors.lightModeGrayscale600,
  wizardIndicatorTextColorInActiveHover: colors.lightModeGrayscale500,

  // Floor Plan Sample Site
  sampleSiteCircle: colors.darkModeClearSafety500,
  sampleSiteCollectionCircle: colors.darkModeClearSafety700,

  // Pagination
  paginationBorder: colors.lightModeGrayscale500,
  paginationTextColor: colors.lightModeGrayscale900,
  paginationHoverActiveStates: colors.lightModeClearSafety500,
  paginationFocusOutline: colors.lightModeClearSafety200,
  paginationDisabledBorder: colors.lightModeGrayscale300,
  paginationDisabledColor: colors.lightModeGrayscale600,
  paginationSelectedColor: colors.lightModeClearSafety600,

  // Tabs
  tabNormal: colors.darkModeGrayscale700,
  tabHover: colors.lightModeClearSafety600,
  tabPressed: colors.lightModeClearSafety400,
  tabSelected: colors.lightModeClearSafety500,
  tabFocusOutline: colors.lightModeClearSafety700,
  tabDisabled: colors.darkModeGrayscale600,

  // Avatar Dropdown
  avatarDropdownBorder: colors.lightModeGrayscale300,
  avatarDropdownIconColor: colors.lightModeGrayscale700,

  // Breadcrumb
  breadcrumbDefault: colors.lightModeGrayscale700,
  breadcrumbActive: colors.lightModeGrayscale600,
  breadcrumbDefaultHover: colors.lightModeClearSafety600,
  breadcrumbDefaultPressed: colors.lightModeClearSafety400,
  breadcrumbFocusedOutline: colors.lightModeClearSafety600,

  // Icon Illustrations
  illustrationCurrentColor: colors.lightModeGrayscale100,

  // Strength Indicator Bar
  strengthIndicatorBarNeutral: colors.lightModeGrayscale300,
  strengthIndicatorBarPoor: colors.error400,
  strengthIndicatorBarOkay: colors.specialOrange,
  strengthIndicatorBarExcellent: colors.success400,

  // Number Circle
  numberCircleTextColor: colors.lightModeGrayscale900,
  numberCircleTextColorActive: colors.lightModeGrayscale100,
  numberCircleTextColorDisabled: colors.lightModeGrayscale900,

  // RackPreview
  rackPreviewCapacityMeterBackground: colors.lightModeGrayscale300,
  rackPreviewSequencerIconBackground: colors.lightModeGrayscale200,

  // Iseq status
  iseqStatusSuccess: colors.lightModeGrayscale200,
  iseqStatusFailed: colors.error100,

  // Rack icon well color
  rackWellDefaultAvailableBackground: colors.lightModeGrayscale700,
  rackWellDefaultAvailablePrintBackground: colors.lightModeGrayscale700,
  rackWellDefaultUnAvailableBackground: colors.lightModeGrayscale300,
  rackWellDefaultUnAvailablePrintBackground: colors.lightModeGrayscale300,

  // Sequencer Progress
  sequencerProgressBar: colors.brand200,
  sequencerCount: colors.lightModeGrayscale700,
};

export default palette;
