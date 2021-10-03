import PropTypes from 'prop-types';
import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <td className="file-icon">
      <FileIcon type={file.type} />
    </td>
    <td className="file-name">
      <FileName name={file.name} />
    </td>
    <td className="commit-message">
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileListItem;
