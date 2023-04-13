import styled from 'styled-components';

import { fontSizes } from '../../constants/themes';
import Block from '../Block';
import palette from '../../constants/themes/palette';

const EmptyDisplay = styled(Block)`
  align-items: ${({ align }) => align || 'center'};
  color: ${palette.primaryText};
  display: flex;
  flex-direction: column;
  font-size: 2.1rem;
  font-weight: 100;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 60vw;
  min-height: 40vh;
  text-align: center;
  width: 100%;

  h3 {
    font-size: ${fontSizes.h1};
    margin-bottom: 0.6rem;
  }
`;

export default EmptyDisplay;
