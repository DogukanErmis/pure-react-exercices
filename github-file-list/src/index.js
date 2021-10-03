import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FileList({ files }) {
  return (
    <table>
      <tbody>
        {files.map((file) => (
          <tr key={file.id}>
            <td>{file.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
