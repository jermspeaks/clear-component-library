import PropTypes from 'prop-types';

const ColorBlock = ({ backgroundColor, children }) => (
  <div
    style={{
      height: '40px',
      backgroundColor,
      marginRight: '10px',
    }}
  >
    {children}
  </div>
);

ColorBlock.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default ColorBlock;
