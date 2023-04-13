import colors from './colors';
import commonPalette from './common.palette';

// Clear Safety is the default theme
const palette = {
  ...commonPalette,

  // Grayscale shortcuts
  grayscale100: [colors.darkModeGrayscale100[0]], // #FFFFFF
  grayscale200: [colors.darkModeGrayscale200[0]], // #A6B0B9
  grayscale300: [colors.darkModeGrayscale300[0]], // #80888E
  grayscale400: [colors.darkModeGrayscale400[0]], // #62686E
  grayscale500: [colors.darkModeGrayscale500[0]], // #3F5460
  grayscale600: [colors.darkModeGrayscale600[0]], // #333F49
  grayscale700: [colors.darkModeGrayscale700[0]], // #232F37
  grayscale800: [colors.darkModeGrayscale800[0]], // #1C252C
  grayscale900: [colors.darkModeGrayscale900[0]], // #151C21

  // Brand Colors
  brand100: [colors.darkModeClearSafety100[0]], // #CCF0FF
  brand200: [colors.darkModeClearSafety200[0]], // #99E0FF
  brand300: [colors.darkModeClearSafety300[0]], // #66D1FF
  brand400: [colors.darkModeClearSafety400[0]], // #33C1FF
  brand500: [colors.darkModeClearSafety500[0]], // #00B2FF
  brand600: [colors.darkModeClearSafety600[0]], // #008ECC
  brand700: [colors.darkModeClearSafety700[0]], // #006B99
  brand800: [colors.darkModeClearSafety800[0]], // #004766
  brand900: [colors.darkModeClearSafety900[0]], // #002433

  // Brand Color Aliases
  primaryBrand: [colors.darkModeClearSafety500[0]], // #00B2FF // 500

  // Text Colors
  primaryText: [colors.darkModeGrayscale100[0]], // #FFFFFF
  secondaryText: [colors.darkModeGrayscale200[0]], // #A6B0B9
  disabledText: [colors.darkModeGrayscale300[0]], // #80888E
  linkText: [colors.darkModeClearSafety500[0]], // #00B2FF // 500

  // Border Colors
  primaryBorder: [colors.darkModeGrayscale100[0]], // #FFFFFF

  // Page Colors
  publicPageHeaderBackground: [colors.darkModeGrayscale900[0]],
  publicPageFooterBackground: [colors.darkModeGrayscale900[0]],
  pageHeaderBackground: [colors.darkModeGrayscale700[0]],
  pageHeaderBorder: [colors.darkModeGrayscale800[0]],
  pageBodyBackground: [colors.darkModeGrayscale800[0]],
  pageFooterBackground: [colors.darkModeGrayscale700[0]],
  pageFooterBorder: [colors.darkModeGrayscale800[0]],

  // Alert Colors
  alertText: [colors.darkModeGrayscale100[0]],

  alertSuccessBackground: [colors.success900[0]],
  alertSuccessBorder: [colors.success500[0]],

  alertWarningBackground: [colors.warning900[0]],
  alertWarningBorder: [colors.warning500[0]],

  alertErrorBackground: [colors.error900[0]],
  alertErrorBorder: [colors.error500[0]],

  alertInfoBackground: [colors.darkModeClearSafety900[0]],
  alertInfoBorder: [colors.darkModeClearSafety500[0]],

  // Message Colors
  messageSuccess: [colors.success500[0]], // #43BC4D
  messageSuccessBCG: [colors.success900[0]], // #0D260F
  messageLightSuccess: [colors.success400[0]], // #69C971

  messageWarning: [colors.warning500[0]], // #FFB932
  messageWarningBCG: [colors.warning900[0]], // #514525

  messageError: [colors.error500[0]], // ##FF1F2C
  messageErrorBCG: [colors.error900[0]], // #330609
  messageLightError: [colors.error400[0]], // #FF4C56
  messageErrorDisabled: [colors.error800[0]], // #660C11

  messageInfo: [colors.darkModeClearSafety500[0]], // ##00B2FF
  messageInfoBCG: [colors.darkModeClearSafety900[0]], // #002433

  // Button Colors - Text
  buttonTextPrimary: [colors.darkModeGrayscale800[0]],
  buttonTextPrimaryDisabled: [colors.darkModeGrayscale200[0]],
  buttonTextSecondary: [colors.darkModeClearSafety500[0]],
  buttonTextSecondaryDisabled: [colors.darkModeGrayscale300[0]],
  buttonTextTertiary: [colors.darkModeGrayscale100[0]],
  buttonTextTertiaryDisabled: [colors.darkModeGrayscale300[0]],

  // Button Colors - Background
  buttonPrimaryHover: [colors.darkModeClearSafety200[0]],
  buttonPrimaryPressed: [colors.darkModeClearSafety300[0]],
  buttonPrimaryFocused: [colors.darkModeClearSafety600[0]],
  buttonPrimaryOutline: [colors.darkModeClearSafety700[0]],
  buttonPrimaryDisabled: [colors.darkModeClearSafety800[0]],
  buttonSecondaryHover: [colors.darkModeClearSafety200[0]],
  buttonSecondaryPressed: [colors.darkModeClearSafety300[0]],
  buttonSecondaryFocused: [colors.darkModeClearSafety600[0]],
  buttonTertiaryBrandHover: [colors.darkModeGrayscale500[0]],
  buttonTertiaryBrandPressed: [colors.darkModeGrayscale900[0]],
  buttonTertiaryWhiteHover: [colors.darkModeGrayscale500[0]],
  buttonTertiaryWhitePressed: [colors.darkModeGrayscale900[0]],
  buttonTertiaryDarkHover: [colors.darkModeGrayscale500[0]],
  buttonTertiaryDarkPressed: [colors.darkModeGrayscale900[0]],
  buttonDanger: [colors.error400[0]], // #FF4C56
  buttonDangerHover: [colors.error300[0]], // #FF7880
  buttonDangerPressed: [colors.error700[0]], // #99121A
  buttonDangerFocused: [colors.error400[0]],
  buttonDangerDisabled: [colors.error800[0]], // #660C11
  buttonLoading: [colors.darkModeGrayscale900[0]], // #660C11

  // Avatar Colors
  avatarTextColor: [colors.darkModeGrayscale800[0]], // #1C252C
  avatarBackgroundColor: [colors.darkModeGrayscale200[0]], // #A6B0B9

  // Progress Bar
  progressBackground: [colors.darkModeGrayscale900[0]], // #151C21
  progressText: [colors.darkModeGrayscale100[0]], // #354551
  progressSecondary: [colors.darkModeGrayscale700[0]], // #232F37
  progressInitialText: [colors.darkModeGrayscale900[0]],
  progressInitialBackground: [colors.darkModeGrayscale900[0]],
  progressInitialBorder: [colors.darkModeGrayscale500[0]],

  // Large Progress Bar
  largeProgressCurrentText: [colors.darkModeGrayscale100[0]],
  largeProgressCurrentBackground: [colors.darkModeGrayscale700[0]],
  largeProgressCurrentBorder: [colors.darkModeGrayscale500[0]],
  largeProgressAlertErrorBackground: [colors.error900[0]],
  largeProgressAlertErrorBorder: [colors.error500[0]],
  largeProgressAlertReviewBackground: [colors.error900[0]],
  largeProgressAlertReviewBorder: [colors.error500[0]],
  largeProgressAlertInvalidBackground: [colors.warning900[0]],
  largeProgressAlertInvalidBorder: [colors.warning500[0]],
  largeProgressCompleteBackground: [colors.darkModeGrayscale700[0]],
  largeProgressCompleteBorder: [colors.darkModeGrayscale500[0]],

  // Cards
  cardBackgroundPrimary: [colors.darkModeGrayscale600[0]], // #333F49
  cardBackgroundSecondary: [colors.darkModeGrayscale700[0]], // #232F37
  cardBackgroundHover: [colors.darkModeGrayscale500[0]], // #3F5460
  panelBackgroundPrimary: [colors.darkModeGrayscale700[0]], // #333F49

  brandCardBackgroundPrimary: [colors.darkModeClearSafety700[0]],

  // Popups / Popovers
  popoverBackgroundPrimary: [colors.darkModeGrayscale900[0]],
  popoverBackgroundSecondary: [colors.darkModeGrayscale600[0]],
  popoverBackgroundHover: [colors.darkModeGrayscale700[0]],

  // Text Input Colors - background
  inputBackground: [colors.darkModeGrayscale700[0]],

  // Text Input Colors - text
  inputPrimary: [colors.darkModeGrayscale100[0]],
  inputDisabled: [colors.darkModeGrayscale300[0]],
  inputPlaceholder: [colors.darkModeGrayscale300[0]],
  inputPlaceholderDisabled: [colors.darkModeGrayscale400[0]],

  // Text Input Colors - border
  inputBorder: [colors.darkModeGrayscale400[0]],
  inputBorderHover: [colors.darkModeGrayscale100[0]],
  inputBorderFocused: [colors.darkModeClearSafety500[0]],
  inputBorderDisabled: [colors.darkModeGrayscale500[0]],
  inputErrorBorder: [colors.error500[0]],
  inputErrorBorderHover: [colors.error300[0]],
  inputErrorBorderFocused: [colors.error500[0]],

  // Text Input Colors - outline
  inputOutlineFocused: [colors.darkModeClearSafety200[0]],
  inputErrorOutlineFocused: [colors.error800[0]],

  // Checkbox Input Colors - outline
  checkboxOutlineFocused: [colors.darkModeClearSafety200[0]],

  // Checkbox Input - Unchecked
  checkboxUncheckedBackground: [colors.darkModeGrayscale700[0]],
  checkboxUncheckedBorder: [colors.darkModeGrayscale200[0]],
  checkboxUncheckedHoverBorder: [colors.darkModeGrayscale100[0]],
  checkboxUncheckedHoverBackground: [colors.darkModeGrayscale600[0]],
  checkboxUncheckedPressedBackground: [colors.darkModeGrayscale600[0]],
  checkboxUncheckedDisabledBorder: [colors.darkModeGrayscale500[0]],
  checkboxUncheckedDisabledBackground: [colors.darkModeGrayscale700[0]],

  // Checkbox Input - Checked
  checkboxCheckedIcon: [colors.darkModeGrayscale800[0]],
  checkboxCheckedBackground: [colors.darkModeClearSafety500[0]],
  checkboxCheckedHoverBackground: [colors.darkModeClearSafety300[0]],
  checkboxCheckedPressedBackground: [colors.darkModeClearSafety700[0]],
  checkboxCheckedDisabledIcon: [colors.darkModeGrayscale300[0]],
  checkboxCheckedDisabledBackground: [colors.darkModeClearSafety800[0]],

  // Toggle Input Colors - Outline
  toggleOutlineFocused: [colors.darkModeClearSafety700[0]],

  // Toggle Input Colors - Unchecked
  toggleUncheckedBackground: [colors.darkModeGrayscale700[0]],
  toggleUncheckedBorder: [colors.darkModeGrayscale200[0]],
  toggleUncheckedIcon: [colors.darkModeGrayscale200[0]],
  toggleUncheckedHoverBackground: [colors.darkModeGrayscale600[0]],
  toggleUncheckedHoverBorder: [colors.darkModeGrayscale200[0]],
  toggleUncheckedPressedBackground: [colors.darkModeGrayscale500[0]],
  toggleUncheckedPressedBorder: [colors.darkModeGrayscale200[0]],
  toggleUncheckedPressedIcon: [colors.darkModeGrayscale100[0]],
  toggleUncheckedDisabledBackground: [colors.darkModeGrayscale700[0]],
  toggleUncheckedDisabledBorder: [colors.darkModeGrayscale600[0]],
  toggleUncheckedDisabledIcon: [colors.darkModeGrayscale300[0]],

  // Toggle Input Colors - Checked
  toggleCheckedBackground: [colors.darkModeClearSafety500[0]],
  toggleCheckedBorder: [colors.darkModeClearSafety500[0]],
  toggleCheckedIcon: [colors.darkModeGrayscale800[0]],
  toggleCheckedHoverBackground: [colors.darkModeClearSafety300[0]],
  toggleCheckedHoverBorder: [colors.darkModeClearSafety300[0]],
  toggleCheckedPressedBackground: [colors.darkModeClearSafety700[0]],
  toggleCheckedPressedBorder: [colors.darkModeClearSafety700[0]],
  toggleCheckedDisabledBackground: [colors.darkModeClearSafety800[0]],
  toggleCheckedDisabledBorder: [colors.darkModeClearSafety800[0]],
  toggleCheckedDisabledIcon: [colors.darkModeGrayscale300[0]],

  // Radio Input Colors - outline
  radioOutlineFocused: [colors.darkModeClearSafety200[0]],

  // Radio Input - Unchecked
  radioUncheckedBackground: [colors.darkModeGrayscale700[0]],
  radioUncheckedBorder: [colors.darkModeGrayscale200[0]],
  radioUncheckedHoverBackground: [colors.darkModeGrayscale600[0]],
  radioUncheckedHoverBorder: [colors.darkModeGrayscale100[0]],
  radioUncheckedPressedBackground: [colors.darkModeGrayscale600[0]],
  radioUncheckedPressedBorder: [colors.darkModeGrayscale200[0]],
  radioUncheckedDisabledBackground: [colors.darkModeGrayscale700[0]],
  radioUncheckedDisabledBorder: [colors.darkModeGrayscale500[0]],

  // Radio Input - Checked
  radioCheckedDonut: [colors.darkModeClearSafety500[0]],
  radioCheckedHoverDonut: [colors.darkModeClearSafety300[0]],
  radioCheckedPressedDonut: [colors.darkModeClearSafety700[0]],
  radioCheckedDisabledDonut: [colors.darkModeClearSafety800[0]],

  // Radio Input - `radioBtBox`
  radioBtBoxUncheckedBackground: [colors.darkModeClearSafety900[0]],
  radioBtBoxCheckedDisabledBackground: [colors.darkModeClearSafety700[0]],
  radioBtBoxCheckedBackground: [colors.darkModeClearSafety800[0]],
  radioBtBoxCheckedBorder: [colors.darkModeGrayscale400[0]],

  // Radio Input - `smallRadioBtBox`
  smallRadioBtBoxUncheckedBorder: [colors.darkModeGrayscale200[0]],
  smallRadioBtBoxCheckedBackground: [colors.darkModeGrayscale400[0]],
  smallRadioBtBoxCheckedBorder: [colors.darkModeGrayscale400[0]],

  // Selector
  selectorUncheckedBorder: [colors.darkModeGrayscale500[0]],
  selectorUncheckedHoverBackground: [colors.darkModeGrayscale700[0]],
  selectorUncheckedHoverBorder: [colors.darkModeGrayscale300[0]],
  selectorUncheckedPressedBorder: [colors.darkModeGrayscale700[0]],
  selectorUncheckedDisabledBorder: [colors.darkModeGrayscale400[0]],
  selectorCheckedBackground: [colors.darkModeClearSafety700[0]],
  selectorCheckedBorder: [colors.darkModeClearSafety100[0]],
  selectorOutline: [colors.darkModeClearSafety200[0]],

  // Select Colors - background
  selectBackground: [colors.darkModeGrayscale700[0]],

  // Select Colors - text
  selectPrimary: [colors.darkModeGrayscale100[0]],
  selectDisabled: [colors.darkModeGrayscale300[0]],
  selectPlaceholder: [colors.darkModeGrayscale300[0]],
  selectPlaceholderDisabled: [colors.darkModeGrayscale400[0]],

  // Select Colors - border
  selectBorder: [colors.darkModeGrayscale400[0]],
  selectBorderHover: [colors.darkModeGrayscale100[0]],
  selectBorderFocused: [colors.darkModeClearSafety500[0]],
  selectBorderDisabled: [colors.darkModeGrayscale500[0]],
  selectErrorBorder: [colors.error500[0]],
  selectErrorBorderHover: [colors.error300[0]],
  selectErrorBorderFocused: [colors.error500[0]],

  // Select Colors - outline
  selectOutlineFocused: [colors.darkModeClearSafety200[0]],
  selectErrorOutlineFocused: [colors.error800[0]],

  // Dropdown
  dropdownBackground: [colors.darkModeGrayscale600[0]],
  dropdownItemDefaultBackground: [colors.darkModeGrayscale600[0]],
  dropdownItemHoverBackground: [colors.darkModeGrayscale500[0]],
  dropdownItemActiveButtonBackground: [colors.darkModeClearSafety900[0]],
  dropdownItemActiveButtonColor: [colors.darkModeClearSafety900[0]],
  dropdownItemPressedBackground: [colors.darkModeGrayscale400[0]],
  dropdownItemActiveIconBackground: [colors.darkModeClearSafety500[0]],
  dropdownItemDisabled: [colors.darkModeGrayscale300[0]],
  dropdownTagBackground: [colors.darkModeGrayscale900[0]],
  dropdownTagRemoveHover: [colors.darkModeGrayscale300[0]],

  // Overlay
  overlayBackground: [colors.darkModeGrayscale600[0]],
  overlayRemoveHover: [colors.darkModeGrayscale300[0]],

  // Scrollbar
  scrollbarBackground: [colors.darkModeGrayscale800[0]],
  scrollbarCornerBackground: [colors.darkModeGrayscale800[0]],
  scrollbarModalBackground: [colors.darkModeGrayscale600[0]],
  scrollbarModalCornerBackground: [colors.darkModeGrayscale800[0]],
  scrollbarOverlayBackground: [colors.darkModeGrayscale600[0]],
  scrollbarOverlayCornerBackground: [colors.darkModeGrayscale600[0]],

  // Datepicker
  datepickerBackground: [colors.darkModeGrayscale700[0]],
  datepickerTableBackground: [colors.darkModeGrayscale600[0]],
  datepickerSelectedDayBackground: [colors.darkModeClearSafety500[0]],
  datepickerSpanDayBackground: [colors.darkModeClearSafety300[0]],

  // Calendar (FullCalendar)
  calendarBackgroundColor: [colors.darkModeGrayscale100[0]],
  calendarDayBackgroundColor: [colors.success800[0]],

  // SVG - Zone
  zoneFill: [colors.darkModeGrayscale900[0]], // #151C21

  // Modal
  modalScrimBackground: [colors.darkModeModalScrim[0]],
  modalScrimWithoutSupport: [colors.darkModeModalScrimWithoutSupport[0]],
  modalBackground: [colors.darkModeGrayscale600[0]],
  modalText: [colors.darkModeGrayscale100[0]],
  modalContentText: [colors.lightModeGrayscale200[0]],
  modalFooterBackground: [colors.darkModeGrayscale500[0]],

  // Table
  tableBackground: [colors.darkModeGrayscale600[0]],
  tableHeaderBorder: [colors.darkModeGrayscale200[0]],
  tableRowBackground: [colors.darkModeGrayscale600[0]],
  tableRowInvalidBackground: [colors.warning900[0]],
  tableRowInvalidHoverBackground: [colors.warning800[0]],
  tableZebraRowBackground: [colors.darkModeGrayscale600[0]],
  tableRowHoverBackground: [colors.darkModeGrayscale500[0]],
  tableRowPressedBackground: [colors.darkModeGrayscale400[0]],
  tableRowFocusedOutline: [colors.darkModeClearSafety200[0]],
  tableRowErrorBackground: [colors.error900[0]],
  tableRowErrorHoverBackground: [colors.error200[0]],
  tableRowWarningBackground: [colors.warning900[0]],
  filledTableHeaderBackground: [colors.darkModeGrayscale400[0]],

  // Upload
  uploadDnDBackground: [colors.darkModeGrayscale800[0]],

  // Slider
  sliderConnectBackground: [colors.darkModeClearSafety500[0]],
  sliderHandleBackground: [colors.darkModeClearSafety500[0]],
  sliderHandleHoverBackground: [colors.darkModeClearSafety300[0]],
  sliderHandlePressedBackground: [colors.darkModeClearSafety700[0]],
  sliderHandleFocusedOutline: [colors.darkModeClearSafety200[0]],
  sliderHorizontalBackground: [colors.darkModeGrayscale500[0]],
  sliderTooltipBackground: [colors.darkModeClearSafety500[0]],
  sliderTooltipColor: [colors.darkModeGrayscale100[0]],

  // Accordion Colors
  accordionBackgroundExpanded: [colors.darkModeGrayscale500[0]],
  accordionBackgroundCollapsed: [colors.darkModeGrayscale600[0]],
  accordionBorder: [colors.darkModeGrayscale500[0]],
  accordionColors: [colors.darkModeGrayscale100[0]],
  accordionLabelTextColor: [colors.darkModeGrayscale200[0]],

  // Chips and Tags
  badgeColor: [colors.darkModeGrayscale100[0]],
  positiveResultBadgeText: [colors.darkModeGrayscale100[0]],
  positiveResultBadgeBackgroundColor: [colors.error700[0]],

  // wizard stepper colors
  wizardIndicatorBackgroundColorActive: [colors.darkModeGrayscale600[0]],
  wizardIndicatorBorderActive: [colors.darkModeGrayscale600[0]],
  wizardIndicatorBorderInactive: [colors.darkModeGrayscale600[0]],
  wizardIndicatorColorActive: [colors.darkModeGrayscale100[0]],
  wizardIndicatorColorInActive: [colors.darkModeGrayscale100[0]],
  wizardIndicatorTextColorActive: [colors.darkModeGrayscale100[0]],
  wizardIndicatorTextColorInActive: [colors.darkModeGrayscale100[0]],
  wizardIndicatorTextColorInActiveHover: [colors.darkModeGrayscale100[0]],

  // Floor Plan Sample Site
  sampleSiteCircle: [colors.darkModeClearSafety500[0]],
  sampleSiteCollectionCircle: [colors.darkModeClearSafety700[0]],

  // Pagination
  paginationBorder: [colors.darkModeGrayscale400[0]],
  paginationTextColor: [colors.darkModeGrayscale400[0]],
  paginationHoverActiveStates: [colors.darkModeClearSafety500[0]],
  paginationFocusOutline: [colors.darkModeClearSafety800[0]],
  paginationDisabledBorder: [colors.darkModeGrayscale500[0]],
  paginationDisabledColor: [colors.darkModeGrayscale400[0]],
  paginationSelectedColor: [colors.darkModeClearSafety500[0]],

  // Tabs
  tabNormal: [colors.darkModeGrayscale200[0]],
  tabHover: [colors.darkModeClearSafety500[0]],
  tabPressed: [colors.darkModeClearSafety700[0]],
  tabSelected: [colors.darkModeClearSafety500[0]],
  tabFocusOutline: [colors.darkModeClearSafety200[0]],
  tabDisabled: [colors.darkModeGrayscale300[0]],

  // Avatar Dropdown
  avatarDropdownBorder: [colors.darkModeGrayscale300[0]],
  avatarDropdownIconColor: [colors.darkModeGrayscale100[0]],

  // Breadcrumb
  breadcrumbDefault: [colors.darkModeGrayscale200[0]],
  breadcrumbActive: [colors.darkModeGrayscale100[0]],
  breadcrumbDefaultHover: [colors.darkModeClearSafety500[0]],
  breadcrumbDefaultPressed: [colors.darkModeClearSafety700[0]],
  breadcrumbFocusedOutline: [colors.darkModeClearSafety200[0]],

  // Icon Illustrations
  illustrationCurrentColor: [colors.darkModeGrayscale500[0]],

  // Strength Indicator Bar
  strengthIndicatorBarNeutral: [colors.darkModeGrayscale200[0]],
  strengthIndicatorBarPoor: [colors.error400[0]],
  strengthIndicatorBarOkay: [colors.specialOrange[0]],
  strengthIndicatorBarExcellent: [colors.success400[0]],

  // Number Circle
  numberCircleTextColor: [colors.darkModeGrayscale800[0]],
  numberCircleTextColorActive: [colors.darkModeGrayscale800[0]],
  numberCircleTextColorDisabled: [colors.darkModeGrayscale800[0]],

  // RackPreview
  rackPreviewCapacityMeterBackground: [colors.darkModeGrayscale700[0]],
  rackPreviewSequencerIconBackground: [colors.darkModeGrayscale700[0]],

  // Iseq status
  iseqStatusSuccess: [colors.darkModeGrayscale700[0]],
  iseqStatusFailed: [colors.error800[0]],

  // Rack icon well color
  rackWellDefaultAvailableBackground: [colors.darkModeGrayscale900],
  rackWellDefaultAvailablePrintBackground: [colors.lightModeGrayscale700],
  rackWellDefaultUnAvailableBackground: [colors.darkModeGrayscale500],
  rackWellDefaultUnAvailablePrintBackground: [colors.lightModeGrayscale400],

  // Sequencer Progress Bar
  sequencerProgressBar: [colors.brand200],
  sequencerCount: [colors.darkModeGrayscale700],
};

export default palette;
