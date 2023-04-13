import PropTypes from 'prop-types'

const HelloWorld = ({ text }) => {
  return <div className="text">This is test text: {text}</div>
}

HelloWorld.propTypes = {
  text: PropTypes.string,
}

export default HelloWorld
