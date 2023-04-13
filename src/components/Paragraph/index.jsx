import PropTypes from 'prop-types';
import styled from 'styled-components';

import fonts from '../../constants/themes/fonts';
import palette from '../../constants/themes/palette';

const Paragraph = styled.p`
  color: ${({ fade }) => (fade ? palette.secondaryText[0] : palette.primaryText[0])};
  font-family: ${fonts.primary};
  font-size: ${({ small }) => (small ? '1.4rem' : '1.6rem')};
  line-height: 1.3;
  margin: 1rem 0 0;
`;

Paragraph.propTypes = {
  small: PropTypes.bool,
  fade: PropTypes.bool,
};

export default Paragraph;
