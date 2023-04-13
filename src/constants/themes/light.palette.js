import colors from './colors';
import commonPalette from './common.palette';

// Clear Safety is the default theme
const palette = {
  ...commonPalette,

  // Grayscale shortcuts
  grayscale100: [colors.lightModeGrayscale100[0]], // 0 #FFFFFF
  grayscale200: [colors.lightModeGrayscale200[0]], // 2 #F4F7F9
  grayscale300: [colors.lightModeGrayscale300[0]], // 3 #E5EBF1
  grayscale400: [colors.lightModeGrayscale400[0]], // 4 #C6CFDA
  grayscale500: [colors.lightModeGrayscale500[0]], // 5 #ADB5C3
  grayscale600: [colors.lightModeGrayscale600[0]], // 6 #8E98AB
  grayscale700: [colors.lightModeGrayscale700[0]], // 7 #677287
  grayscale800: [colors.lightModeGrayscale800[0]], // 8 #474F5E
  grayscale900: [colors.lightModeGrayscale900[0]], // 9 #2A303A

  // Brand Colors
  brand100: [colors.lightModeClearSafety100[0]], // #CCF0FF
  brand200: [colors.lightModeClearSafety200[0]], // #99E0FF
  brand300: [colors.lightModeClearSafety300[0]], // #66D1FF
  brand400: [colors.lightModeClearSafety400[0]], // #33C1FF
  brand500: [colors.lightModeClearSafety500[0]], // #00B2FF
  brand600: [colors.lightModeClearSafety600[0]], // #008ECC
  brand700: [colors.lightModeClearSafety700[0]], // #006B99
  brand800: [colors.lightModeClearSafety800[0]], // #004766
  brand900: [colors.lightModeClearSafety900[0]], // #002433

  // Brand Color Aliases
  primaryBrand: [colors.lightModeClearSafety500[0]], // #00B2FF // 500

  // Text Colors
  primaryText: [colors.lightModeGrayscale900[0]], // #2A303A
  secondaryText: [colors.lightModeGrayscale700[0]], // #677287
  disabledText: [colors.lightModeGrayscale600[0]], // #8E98AB
  linkText: [colors.lightModeClearSafety600[0]], // #008ECC // 600

  // Border Colors
  primaryBorder: [colors.lightModeGrayscale900[0]], // #FFFFFF

  // Page Colors
  publicPageHeaderBackground: [colors.lightModeGrayscale100[0]],
  publicPageFooterBackground: [colors.lightModeGrayscale100[0]],
  pageHeaderBackground: [colors.lightModeGrayscale100[0]],
  pageHeaderBorder: [colors.lightModeGrayscale300[0]],
  pageBodyBackground: [colors.lightModeGrayscale200[0]],
  pageFooterBackground: [colors.lightModeGrayscale100[0]],
  pageFooterBorder: [colors.lightModeGrayscale300[0]],

  // Alert Colors
  alertText: [colors.lightModeGrayscale900[0]],

  alertSuccessBackground: [colors.success100[0]],
  alertSuccessBorder: [colors.success500[0]],

  alertWarningBackground: [colors.warning100[0]],
  alertWarningBorder: [colors.warning500[0]],

  alertErrorBackground: [colors.error100[0]],
  alertErrorBorder: [colors.error500[0]],

  alertInfoBackground: [colors.lightModeClearSafety100[0]],
  alertInfoBorder: [colors.lightModeClearSafety500[0]],

  // Message Colors
  messageSuccess: [colors.success500[0]], // #43BC4D
  messageSuccessBCG: [colors.success100[0]], // #0D260F
  messageLightSuccess: [colors.success400[0]], // #69C971

  messageWarning: [colors.warning500[0]], // #FFB932
  messageWarningBCG: [colors.warning100[0]], // #514525

  messageError: [colors.error500[0]], // ##FF1F2C
  messageErrorBCG: [colors.error100[0]], // #330609
  messageLightError: [colors.error400[0]], // #FF4C56
  messageErrorDisabled: [colors.error800[0]], // #660C11

  messageInfo: [colors.lightModeClearSafety500[0]], // ##00B2FF
  messageInfoBCG: [colors.lightModeClearSafety100[0]], // #002433

  // Button Colors - Text
  buttonTextPrimary: [colors.lightModeGrayscale100[0]],
  buttonTextPrimaryDisabled: [colors.lightModeGrayscale700[0]],
  buttonTextSecondary: [colors.lightModeClearSafety600[0]],
  buttonTextSecondaryDisabled: [colors.lightModeGrayscale600[0]],
  buttonTextTertiary: [colors.lightModeGrayscale900[0]],
  buttonTextTertiaryDisabled: [colors.lightModeGrayscale600[0]],

  // Button Colors - Background
  buttonPrimaryHover: [colors.lightModeClearSafety600[0]],
  buttonPrimaryPressed: [colors.lightModeClearSafety400[0]],
  buttonPrimaryFocused: [colors.lightModeClearSafety500[0]],
  buttonPrimaryOutline: [colors.lightModeClearSafety700[0]],
  buttonPrimaryDisabled: [colors.lightModeClearSafety200[0]],
  buttonSecondaryHover: [colors.lightModeClearSafety600[0]],
  buttonSecondaryPressed: [colors.lightModeClearSafety400[0]],
  buttonSecondaryFocused: [colors.lightModeClearSafety600[0]],
  buttonTertiaryBrandHover: [colors.lightModeGrayscale300[0]],
  buttonTertiaryBrandPressed: [colors.lightModeGrayscale400[0]],
  buttonTertiaryWhiteHover: [colors.lightModeGrayscale300[0]],
  buttonTertiaryWhitePressed: [colors.lightModeGrayscale400[0]],
  buttonTertiaryDarkHover: [colors.darkModeGrayscale500[0]],
  buttonTertiaryDarkPressed: [colors.darkModeGrayscale900[0]],
  buttonDanger: [colors.error500[0]],
  buttonDangerHover: [colors.error600[0]],
  buttonDangerPressed: [colors.error700[0]],
  buttonDangerFocused: [colors.error500[0]],
  buttonDangerDisabled: [colors.error200[0]],
  buttonLoading: [colors.lightModeGrayscale400[0]], // #660C11

  // Avatar Colors
  avatarBackgroundColor: [colors.lightModeGrayscale700[0]], // #677287
  avatarTextColor: [colors.lightModeGrayscale100[0]], // #FFFFFF

  // Progress Bar
  progressBackground: [colors.lightModeGrayscale900[0]], // #151C21
  progressText: [colors.lightModeGrayscale900[0]], // #354551
  progressSecondary: [colors.lightModeGrayscale700[0]], // #232F37
  progressInitialText: [colors.lightModeGrayscale900[0]],
  progressInitialBackground: [colors.lightModeGrayscale300[0]],
  progressInitialBorder: [colors.lightModeGrayscale400[0]],

  // Large Progress Bar
  largeProgressCurrentText: [colors.lightModeGrayscale900[0]],
  largeProgressCurrentBackground: [colors.lightModeClearSafety100[0]],
  largeProgressCurrentBorder: [colors.lightModeClearSafety500[0]],
  largeProgressAlertErrorBackground: [colors.error100[0]],
  largeProgressAlertErrorBorder: [colors.error600[0]],
  largeProgressAlertReviewBackground: [colors.error100[0]],
  largeProgressAlertReviewBorder: [colors.error600[0]],
  largeProgressAlertInvalidBackground: [colors.warning100[0]],
  largeProgressAlertInvalidBorder: [colors.warning600[0]],
  largeProgressCompleteBackground: [colors.success100[0]],
  largeProgressCompleteBorder: [colors.success600[0]],

  // Cards
  cardBackgroundPrimary: [colors.lightModeGrayscale100[0]], // #FFFFFF
  cardBackgroundSecondary: [colors.lightModeGrayscale200[0]], // #F4F7F9
  cardBackgroundHover: [colors.lightModeGrayscale300[0]], // #E5EBF1
  panelBackgroundPrimary: [colors.lightModeGrayscale100[0]], // #FFFFFF

  brandCardBackgroundPrimary: [colors.lightModeClearSafety100[0]],

  // Popups / Popovers
  popoverBackgroundPrimary: [colors.lightModeGrayscale100[0]], // #FFFFFF
  popoverBackgroundSecondary: [colors.lightModeGrayscale200[0]], // #F4F7F9
  popoverBackgroundHover: [colors.lightModeGrayscale300[0]], // #E5EBF1

  // Text Input Colors - background
  inputBackground: [colors.lightModeGrayscale100[0]],

  // Text Input Colors - text
  inputPrimary: [colors.lightModeGrayscale900[0]],
  inputDisabled: [colors.lightModeGrayscale600[0]],
  inputPlaceholder: [colors.lightModeGrayscale600[0]],
  inputPlaceholderDisabled: [colors.lightModeGrayscale500[0]],

  // Text Input Colors - border
  inputBorder: [colors.lightModeGrayscale500[0]],
  inputBorderHover: [colors.lightModeGrayscale900[0]],
  inputBorderFocused: [colors.lightModeClearSafety500[0]],
  inputBorderDisabled: [colors.lightModeGrayscale300[0]],
  inputErrorBorder: [colors.error500[0]],
  inputErrorBorderHover: [colors.error600[0]],
  inputErrorBorderFocused: [colors.error500[0]],

  // Text Input Colors - outline
  inputOutlineFocused: [colors.lightModeClearSafety200[0]],
  inputErrorOutlineFocused: [colors.error200[0]],

  // Checkbox Input Colors
  checkboxOutlineFocused: [colors.lightModeClearSafety700[0]],

  // Checkbox Input - Unchecked
  checkboxUncheckedBackground: [colors.lightModeGrayscale100[0]],
  checkboxUncheckedBorder: [colors.lightModeGrayscale700[0]],
  checkboxUncheckedHoverBorder: [colors.lightModeGrayscale700[0]],
  checkboxUncheckedHoverBackground: [colors.lightModeGrayscale300[0]],
  checkboxUncheckedPressedBackground: [colors.lightModeGrayscale400[0]],
  checkboxUncheckedDisabledBorder: [colors.lightModeGrayscale300[0]],
  checkboxUncheckedDisabledBackground: [colors.lightModeGrayscale100[0]],

  // Checkbox Input - Checked
  checkboxCheckedIcon: [colors.lightModeGrayscale100[0]],
  checkboxCheckedBackground: [colors.lightModeClearSafety500[0]],
  checkboxCheckedHoverBackground: [colors.lightModeClearSafety600[0]],
  checkboxCheckedPressedBackground: [colors.lightModeClearSafety400[0]],
  checkboxCheckedDisabledIcon: [colors.lightModeGrayscale700[0]],
  checkboxCheckedDisabledBackground: [colors.lightModeClearSafety200[0]],

  // Toggle Input Colors
  toggleOutlineFocused: [colors.lightModeClearSafety700[0]],

  // Toggle Input Colors - Unchecked
  toggleUncheckedBackground: [colors.lightModeGrayscale100[0]],
  toggleUncheckedBorder: [colors.lightModeGrayscale700[0]],
  toggleUncheckedIcon: [colors.lightModeGrayscale700[0]],
  toggleUncheckedHoverBackground: [colors.lightModeGrayscale300[0]],
  toggleUncheckedHoverBorder: [colors.lightModeGrayscale700[0]],
  toggleUncheckedPressedBackground: [colors.lightModeGrayscale400[0]],
  toggleUncheckedPressedBorder: [colors.lightModeGrayscale700[0]],
  toggleUncheckedPressedIcon: [colors.lightModeGrayscale700[0]],
  toggleUncheckedDisabledBackground: [colors.lightModeGrayscale100[0]],
  toggleUncheckedDisabledBorder: [colors.lightModeGrayscale300[0]],
  toggleUncheckedDisabledIcon: [colors.lightModeGrayscale300[0]],

  // Toggle Input Colors - Checked
  toggleCheckedBackground: [colors.lightModeClearSafety500[0]],
  toggleCheckedBorder: [colors.lightModeClearSafety500[0]],
  toggleCheckedIcon: [colors.lightModeGrayscale100[0]],
  toggleCheckedHoverBackground: [colors.lightModeClearSafety600[0]],
  toggleCheckedHoverBorder: [colors.lightModeClearSafety600[0]],
  toggleCheckedPressedBackground: [colors.lightModeClearSafety400[0]],
  toggleCheckedPressedBorder: [colors.lightModeClearSafety400[0]],
  toggleCheckedDisabledBackground: [colors.lightModeClearSafety200[0]],
  toggleCheckedDisabledBorder: [colors.lightModeClearSafety200[0]],
  toggleCheckedDisabledIcon: [colors.lightModeGrayscale700[0]],

  // Radio Input Colors
  radioOutlineFocused: [colors.lightModeClearSafety700[0]],

  // Radio Input - Unchecked
  radioUncheckedBackground: [colors.lightModeGrayscale100[0]],
  radioUncheckedBorder: [colors.lightModeGrayscale700[0]],
  radioUncheckedHoverBackground: [colors.lightModeGrayscale300[0]],
  radioUncheckedHoverBorder: [colors.lightModeGrayscale700[0]],
  radioUncheckedPressedBackground: [colors.lightModeGrayscale400[0]],
  radioUncheckedPressedBorder: [colors.lightModeGrayscale700[0]],
  radioUncheckedDisabledBackground: [colors.lightModeGrayscale100[0]],
  radioUncheckedDisabledBorder: [colors.lightModeGrayscale300[0]],

  // Radio Input - Checked
  radioCheckedDonut: [colors.lightModeClearSafety500[0]],
  radioCheckedHoverDonut: [colors.lightModeClearSafety600[0]],
  radioCheckedPressedDonut: [colors.lightModeClearSafety400[0]],
  radioCheckedDisabledDonut: [colors.lightModeClearSafety200[0]],

  // Radio Input - `radioBtBox`
  radioBtBoxUncheckedBackground: [colors.lightModeGrayscale200[0]],
  radioBtBoxCheckedDisabledBackground: [colors.lightModeGrayscale100[0]],
  radioBtBoxCheckedBackground: [colors.lightModeGrayscale100[0]],
  radioBtBoxCheckedBorder: [colors.lightModeGrayscale400[0]],

  // Radio Input - `smallRadioBtBox`
  smallRadioBtBoxUncheckedBorder: [colors.lightModeGrayscale500[0]],
  smallRadioBtBoxCheckedBackground: [colors.lightModeClearSafety100[0]],
  smallRadioBtBoxCheckedBorder: [colors.lightModeClearSafety500[0]],

  // Selector
  selectorUncheckedBorder: [colors.lightModeGrayscale500[0]],
  selectorUncheckedHoverBackground: [colors.lightModeGrayscale300[0]],
  selectorUncheckedHoverBorder: [colors.lightModeGrayscale900[0]],
  selectorUncheckedPressedBorder: [colors.lightModeGrayscale400[0]],
  selectorUncheckedDisabledBorder: [colors.lightModeGrayscale300[0]],
  selectorCheckedBackground: [colors.lightModeClearSafety100[0]],
  selectorCheckedBorder: [colors.lightModeClearSafety500[0]],
  selectorOutline: [colors.lightModeClearSafety200[0]],

  // Select Colors - background
  selectBackground: [colors.lightModeGrayscale100[0]],

  // Select Colors - text
  selectPrimary: [colors.lightModeGrayscale900[0]],
  selectDisabled: [colors.lightModeGrayscale600[0]],
  selectPlaceholder: [colors.lightModeGrayscale600[0]],
  selectPlaceholderDisabled: [colors.lightModeGrayscale500[0]],

  // Select Colors - border
  selectBorder: [colors.lightModeGrayscale500[0]],
  selectBorderHover: [colors.lightModeGrayscale900[0]],
  selectBorderFocused: [colors.lightModeClearSafety500[0]],
  selectBorderDisabled: [colors.lightModeGrayscale300[0]],
  selectErrorBorder: [colors.error500[0]],
  selectErrorBorderHover: [colors.error600[0]],
  selectErrorBorderFocused: [colors.error500[0]],

  // Select Colors - outline
  selectOutlineFocused: [colors.lightModeClearSafety200[0]],
  selectErrorOutlineFocused: [colors.error200[0]],

  // Dropdown
  dropdownBackground: [colors.lightModeGrayscale100[0]],
  dropdownItemDefaultBackground: [colors.lightModeGrayscale100[0]],
  dropdownItemHoverBackground: [colors.lightModeGrayscale300[0]],
  dropdownItemPressedBackground: [colors.lightModeGrayscale400[0]],
  dropdownItemActiveIconBackground: [colors.lightModeClearSafety500[0]],
  dropdownItemActiveButtonBackground: [colors.lightModeClearSafety400[0]],
  dropdownItemActiveButtonColor: [colors.lightModeGrayscale100[0]],
  dropdownItemDisabled: [colors.lightModeGrayscale600[0]],
  dropdownTagBackground: [colors.lightModeGrayscale300[0]],
  dropdownTagRemoveHover: [colors.lightModeGrayscale600[0]],

  // Overlay
  overlayBackground: [colors.lightModeGrayscale100[0]],
  overlayRemoveHover: [colors.lightModeGrayscale600[0]],

  // Scrollbar
  scrollbarBackground: [colors.lightModeGrayscale200[0]],
  scrollbarCornerBackground: [colors.lightModeGrayscale400[0]],
  scrollbarModalBackground: [colors.lightModeGrayscale200[0]],
  scrollbarModalCornerBackground: [colors.lightModeGrayscale600[0]],
  scrollbarOverlayBackground: [colors.lightModeGrayscale100[0]],
  scrollbarOverlayCornerBackground: [colors.lightModeGrayscale100[0]],

  // Datepicker
  datepickerBackground: [colors.lightModeGrayscale100[0]],
  datepickerTableBackground: [colors.lightModeGrayscale200[0]],
  datepickerSelectedDayBackground: [colors.lightModeClearSafety500[0]],
  datepickerSpanDayBackground: [colors.lightModeClearSafety200[0]],

  // Calendar (FullCalendar)
  calendarBackgroundColor: [colors.lightModeGrayscale100[0]],
  calendarDayBackgroundColor: [colors.success100[0]],

  // SVG - Zone
  zoneFill: [colors.lightModeGrayscale400[0]],

  // Modal
  modalScrimBackground: [colors.lightModeModalScrim[0]],
  modalScrimWithoutSupport: [colors.lightModeModalScrimWithoutSupport[0]],
  modalBackground: [colors.lightModeGrayscale100[0]],
  modalText: [colors.lightModeGrayscale900[0]],
  modalContentText: [colors.lightModeGrayscale700[0]],
  modalFooterBackground: [colors.lightModeGrayscale200[0]],

  // Table
  tableBackground: [colors.lightModeGrayscale100[0]],
  tableHeaderBorder: [colors.lightModeGrayscale300[0]],
  tableRowBackground: [colors.lightModeGrayscale100[0]],
  tableRowInvalidBackground: [colors.warning100[0]],
  tableZebraRowBackground: [colors.lightModeGrayscale100[0]],
  tableRowHoverBackground: [colors.lightModeGrayscale300[0]],
  tableRowPressedBackground: [colors.lightModeGrayscale400[0]],
  tableRowFocusedOutline: [colors.lightModeClearSafety700[0]],
  tableRowErrorBackground: [colors.error100[0]],
  tableRowErrorHoverBackground: [colors.error200[0]],
  tableRowWarningBackground: [colors.warning100[0]],
  filledTableHeaderBackground: [colors.lightModeGrayscale400[0]],

  // Upload
  uploadDnDBackground: [colors.lightModeGrayscale300[0]],

  // Slider
  sliderConnectBackground: [colors.lightModeClearSafety500[0]],
  sliderHandleBackground: [colors.lightModeClearSafety500[0]],
  sliderHandleHoverBackground: [colors.lightModeClearSafety300[0]],
  sliderHandlePressedBackground: [colors.lightModeClearSafety700[0]],
  sliderHandleFocusedOutline: [colors.lightModeClearSafety200[0]],
  sliderHorizontalBackground: [colors.lightModeGrayscale400[0]],
  sliderTooltipBackground: [colors.lightModeClearSafety500[0]],
  sliderTooltipColor: [colors.lightModeGrayscale100[0]],

  // Accordion Colors
  accordionBackgroundExpanded: [colors.lightModeGrayscale200[0]],
  accordionBackgroundCollapsed: [colors.lightModeGrayscale100[0]],
  accordionBorder: [colors.lightModeGrayscale300[0]],
  accordionColors: [colors.lightModeGrayscale700[0]],
  accordionLabelTextColor: [colors.lightModeGrayscale700[0]],

  // Chips and Tags
  badgeColor: [colors.lightModeGrayscale100[0]],
  positiveResultBadgeText: [colors.darkModeGrayscale100[0]],
  positiveResultBadgeBackgroundColor: [colors.error600[0]],

  // wizard stepper colors
  wizardIndicatorBackgroundColorActive: [colors.lightModeClearSafety500[0]],
  wizardIndicatorBackgroundColorInActive: [colors.lightModeGrayscale100[0]],
  wizardIndicatorBorderActive: [colors.lightModeClearSafety500[0]],
  wizardIndicatorBorderInactive: [colors.lightModeGrayscale600[0]],
  wizardIndicatorColorActive: [colors.lightModeGrayscale100[0]],
  wizardIndicatorColorInActive: [colors.lightModeGrayscale600[0]],
  wizardIndicatorTextColorActive: [colors.lightModeClearSafety500[0]],
  wizardIndicatorTextColorInActive: [colors.lightModeGrayscale600[0]],
  wizardIndicatorTextColorInActiveHover: [colors.lightModeGrayscale500[0]],

  // Floor Plan Sample Site
  sampleSiteCircle: [colors.darkModeClearSafety500[0]],
  sampleSiteCollectionCircle: [colors.darkModeClearSafety700[0]],

  // Pagination
  paginationBorder: [colors.lightModeGrayscale500[0]],
  paginationTextColor: [colors.lightModeGrayscale900[0]],
  paginationHoverActiveStates: [colors.lightModeClearSafety500[0]],
  paginationFocusOutline: [colors.lightModeClearSafety200[0]],
  paginationDisabledBorder: [colors.lightModeGrayscale300[0]],
  paginationDisabledColor: [colors.lightModeGrayscale600[0]],
  paginationSelectedColor: [colors.lightModeClearSafety600[0]],

  // Tabs
  tabNormal: [colors.darkModeGrayscale700[0]],
  tabHover: [colors.lightModeClearSafety600[0]],
  tabPressed: [colors.lightModeClearSafety400[0]],
  tabSelected: [colors.lightModeClearSafety500[0]],
  tabFocusOutline: [colors.lightModeClearSafety700[0]],
  tabDisabled: [colors.darkModeGrayscale600[0]],

  // Avatar Dropdown
  avatarDropdownBorder: [colors.lightModeGrayscale300[0]],
  avatarDropdownIconColor: [colors.lightModeGrayscale700[0]],

  // Breadcrumb
  breadcrumbDefault: [colors.lightModeGrayscale700[0]],
  breadcrumbActive: [colors.lightModeGrayscale600[0]],
  breadcrumbDefaultHover: [colors.lightModeClearSafety600[0]],
  breadcrumbDefaultPressed: [colors.lightModeClearSafety400[0]],
  breadcrumbFocusedOutline: [colors.lightModeClearSafety600[0]],

  // Icon Illustrations
  illustrationCurrentColor: [colors.lightModeGrayscale100[0]],

  // Strength Indicator Bar
  strengthIndicatorBarNeutral: [colors.lightModeGrayscale300[0]],
  strengthIndicatorBarPoor: [colors.error400[0]],
  strengthIndicatorBarOkay: [colors.specialOrange[0]],
  strengthIndicatorBarExcellent: [colors.success400[0]],

  // Number Circle
  numberCircleTextColor: [colors.lightModeGrayscale900[0]],
  numberCircleTextColorActive: [colors.lightModeGrayscale100[0]],
  numberCircleTextColorDisabled: [colors.lightModeGrayscale900[0]],

  // RackPreview
  rackPreviewCapacityMeterBackground: [colors.lightModeGrayscale300[0]],
  rackPreviewSequencerIconBackground: [colors.lightModeGrayscale200[0]],

  // Iseq status
  iseqStatusSuccess: [colors.lightModeGrayscale200[0]],
  iseqStatusFailed: [colors.error100[0]],

  // Rack icon well color
  rackWellDefaultAvailableBackground: [colors.lightModeGrayscale700],
  rackWellDefaultAvailablePrintBackground: [colors.lightModeGrayscale700],
  rackWellDefaultUnAvailableBackground: [colors.lightModeGrayscale300],
  rackWellDefaultUnAvailablePrintBackground: [colors.lightModeGrayscale300],

  // Sequencer Progress
  sequencerProgressBar: [colors.brand200],
  sequencerCount: [colors.lightModeGrayscale700],
};

export default palette;
