import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import Time from './Time';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

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

const FileIcon = ({ type }) => {
  let icon = 'fa-file-text-o';

  if (type === 'folder') {
    icon = 'fa-folder';
  }

  return <i className={`fa ${icon}`} />;
};

const FileName = ({ name }) => <span>{name}</span>;
const CommitMessage = ({ commit }) => <span>{commit.message}</span>;

// Debugging
FileList.propTypes = {
  files: PropTypes.array.isRequired,
};
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};
FileName.propTypes = {
  name: PropTypes.string.isRequired,
};
FileIcon.propTypes = {
  type: PropTypes.string.isRequired,
};
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

// Data
const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: { message: 'Initial commit' },
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: { message: 'Initial commit' },
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-18 21:24:00',
    latestCommit: { message: 'Added a readme' },
  },
];

ReactDOM.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>,
  document.getElementById('root')
);
