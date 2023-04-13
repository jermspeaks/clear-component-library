import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { fontSizes, lineHeights } from '../../constants/themes';
import fonts from '../../constants/themes/fonts';
import palette from '../../constants/themes/palette';

const fontSize = ({ level }) => {
  if (level && fontSizes[`h${level}`]) {
    return fontSizes[`h${level}`];
  }

  return 'h1';
};
const lineHeight = ({ level }) => {
  if (level && lineHeights[`h${level}`]) {
    return lineHeights[`h${level}`];
  }

  return 'h1';
};

const color = ({ color }) => {
  if (color && palette[color]) {
    return palette[color];
  }

  return palette.primaryText;
};

const fontWeight = ({ fontWeight }) => {
  switch (fontWeight) {
    case 'bold':
    case 800:
      return 800;
    case 'normal':
    case 400:
    default:
      return 400;
  }
};

const adjustMargins = css`
  ${({ noMargin }) => (noMargin ? 'margin: 0; line-height: 1rem;' : undefined)};
`;

const styles = css`
  color: ${color};
  font-family: ${fonts.primary};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children),
)`
  ${styles};
  ${adjustMargins};
`;

Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  noMargin: PropTypes.bool,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
