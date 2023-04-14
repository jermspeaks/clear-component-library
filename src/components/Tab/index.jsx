import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import palette from '../../constants/themes/palette';
import fonts from '../../constants/themes/fonts';

const Tab = styled.div`
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 0.3rem;
  color: ${palette.secondaryText};
  cursor: pointer;
  display: inline-block;
  font-family: ${fonts.primary};
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: -0.2rem;
  padding: 0.8rem 0 1rem;
  transition: all 0.2s;

  &:hover {
    border-bottom-color: ${palette.secondaryText};
    color: ${palette.secondaryText};
    text-decoration: none;
  }

  ${({ active }) =>
    active &&
    css`
      &,
      &:hover {
        border-bottom-color: ${palette.primaryBrand};
        color: ${palette.primaryBrand};
        cursor: default;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      & {
        color: ${palette.disabledText};
      }

      &:hover {
        cursor: not-allowed;
      }
    `}
`;

Tab.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default Tab;
