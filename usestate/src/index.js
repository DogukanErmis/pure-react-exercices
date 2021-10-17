import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Room() {
  const [isLit, setLit] = useState(false);

  const toggleLight = () => {
    setLit((isLit) => !isLit);
  };

  return (
    <button onClick={toggleLight}>The room is {isLit ? 'lit' : 'dark'}</button>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
