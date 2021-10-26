import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';

const reducer = (state, action) => {
  switch (action.type) {
  }

  function ShoppingList() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer(reducer, []);
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
