import React from 'react';
import ReactDOM from 'react-dom';
import FileList from './FileList';
import testFiles from './Data';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>,
  document.getElementById('root')
);
