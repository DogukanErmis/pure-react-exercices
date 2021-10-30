import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';


export const Room = () => {
    const [light, dispatch] = useReducer(reducer, 'off');

    return (
        <>
            <button onClick={() => dispatch({ type: 'low' })}>Low</button>
            <button onClick={() => dispatch({ type: 'medium' })}>Medium</button>
            <button onClick={() => dispatch({ type: 'high' })}>High</button>
            <button onClick={() => dispatch({ type: 'off' })}>Off</button>
            <p>{light}</p>
        </>
    );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'low':
      return 'low';
    case 'medium':
      return 'medium';
    case 'high':
      return 'high';
    case 'off':
      return 'off';
    default:
      return state;
  }
};

ReactDOM.render(<Room />, document.getElementById('root'));
