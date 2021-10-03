import PropTypes from 'prop-types';

const FileName = ({ name }) => <span>{name}</span>;

FileName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FileName;
