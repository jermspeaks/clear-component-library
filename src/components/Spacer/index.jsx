import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled.span`
  display: inline-block;
  width: ${({ width }) => width};
`;

Spacer.propTypes = {
  width: PropTypes.string,
};

Spacer.defaultProps = {
  width: '2.4rem',
};

export default Spacer;
