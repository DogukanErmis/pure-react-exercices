import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const RandomList = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers((numbers) => [
      ...numbers,
      { id: numbers.length, value: Math.floor(Math.random() * 100) },
    ]);
  };

  return (
    <>
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {numbers.map((number) => (
          <li key={number.id}>{number.value}</li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<RandomList />, document.getElementById('root'));
