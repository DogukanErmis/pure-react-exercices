import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class House extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    },
  };

  handleToggleLight = (event) => {
    let text = event.target.innerText;
    this.setState({
      rooms: { ...this.state.rooms, [text]: !this.state.rooms[text] },
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleToggleLight}>kitchen</button>
        <button onClick={this.handleToggleLight}>bathroom</button>
        <button onClick={this.handleToggleLight}>livingRoom</button>
        <button onClick={this.handleToggleLight}>bedroom</button>
        <p>kitchen {this.state.rooms.kitchen.toString()}</p>
        <p>bathroom {this.state.rooms.bathroom.toString()}</p>
        <p>livingRoom {this.state.rooms.livingRoom.toString()}</p>
        <p>bedroom {this.state.rooms.bedroom.toString()}</p>
      </>
    );
  }
}

// class CountingParent extends React.Component {
//   state = { actionCount: 0 };

//   handleAction = (action) => {
//     console.log('Child says', action);
//     this.setState({ actionCount: this.state.actionCount + 1 });
//   };

//   handleReset = () => {
//     this.setState({ actionCount: 0 });
//   };

//   render() {
//     return (
//       <div>
//         <Child onAction={this.handleAction} onReset={this.handleReset} />
//         <p>Clicked {this.state.actionCount} times</p>
//       </div>
//     );
//   }
// }

// function Child({ onAction, onReset }) {
//   return (
//     <>
//       <button onClick={onAction}>Click Me!</button>
//       <button onClick={onReset}>Reset</button>
//     </>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <House />
  </React.StrictMode>,
  document.getElementById('root')
);
