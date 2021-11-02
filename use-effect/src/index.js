import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';

const Title = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('test');
    document.title = value;
  }, [value]);

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
  document.getElementById('root')
);
