import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Room } from './Room';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'add':
//       return [...state, { id: state.length, name: action.name }];
//     case 'remove': // keep every item except the one we want to remove
//       return state.filter((_, index) => index !== action.index);
//     case 'clear':
//       return [];
//     default:
//       return state;
//   }
// };

// function ShoppingList() {
//   const inputRef = useRef();
//   const [items, dispatch] = useReducer(reducer, []);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (inputRef.current.value.trim() === '') return;

//     dispatch({ type: 'add', name: inputRef.current.value });

//     inputRef.current.value = '';
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input ref={inputRef} />
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => dispatch({ type: 'remove', index })}>
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
//     </>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <Room />
  </React.StrictMode>,
  document.getElementById('root')
);
