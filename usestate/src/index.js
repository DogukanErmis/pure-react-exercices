import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AudioControls = () => {
  const [controls, setControls] = useState({
    volume: 0,
    bass: 0,
    mid: 0,
    treble: 0,
  });

  const increaseVolume = () => {
    setControls((controls) => ({ ...controls, volume: controls.volume + 1 }));
  };
  const decreaseVolume = () => {
    setControls((controls) => ({ ...controls, volume: controls.volume - 1 }));
  };

  return (
    <>
      <button onClick={increaseVolume}>+</button>
      <span>{controls.volume}</span>
      <button onClick={decreaseVolume}>-</button>
    </>
  );
};

ReactDOM.render(<AudioControls />, document.getElementById('root'));
