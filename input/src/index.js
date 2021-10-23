import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const InputNames = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <label>
        Firstname:
        <input type="text" value={firstName} onChange={changeFirstName} />
      </label>
      <label>
        Lastname:
        <input type="text" value={lastName} onChange={changeLastName} />
      </label>
      <p>
        Hello {firstName} {lastName}!
      </p>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <InputNames />
  </React.StrictMode>,
  document.getElementById('root')
);
