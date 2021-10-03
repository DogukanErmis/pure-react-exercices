import PropTypes from 'prop-types';

const FileIcon = ({ type }) => {
  let icon = 'fa-file-text-o';

  if (type === 'folder') {
    icon = 'fa-folder';
  }

  return <i className={`fa ${icon}`} />;
};

FileIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FileIcon;
