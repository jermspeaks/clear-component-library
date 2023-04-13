import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import palette from '../../constants/themes/palette';
import fonts from '../../constants/themes/fonts';

const Block = styled.div`
  background-color: transparent;
  font-family: ${fonts.primary};
  text-align: ${({ center }) => (center ? 'center' : 'inherit')};

  ${({ defaultColor }) =>
    defaultColor &&
    css`
      color: ${palette.primaryText};
    `}

  ${({ color }) =>
    color &&
    palette[color] &&
    css`
      color: ${palette[color]};
    `}
`;

Block.propTypes = {
  center: PropTypes.bool,
  color: PropTypes.string,
};

export default Block;
