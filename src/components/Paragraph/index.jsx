import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSizes, lineHeights } from '../../constants/themes';
import fonts from '../../constants/themes/fonts';
import palette from '../../constants/themes/palette';

const Paragraph = styled.p`
  color: ${({ fade }) => (fade ? palette.secondaryText : palette.primaryText)};
  font-family: ${fonts.primary};
  font-size: ${({ small }) => (small ? fontSizes.h4 : fontSizes.h3)};
  line-height: ${({ small }) => (small ? lineHeights.h4 : lineHeights.h3)};
  margin: 1rem 0 0;
`;

Paragraph.propTypes = {
  small: PropTypes.bool,
  fade: PropTypes.bool,
};

export default Paragraph;
