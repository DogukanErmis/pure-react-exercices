import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountingParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actionCount: 0 };

    this.handleAction = this.handleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAction(action) {
    console.log('Child says', action);
    this.setState({ actionCount: this.state.actionCount + 1 });
  }

  handleReset() {
    this.setState({ actionCount: 0 });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.handleReset} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction, onReset }) {
  return (
    <>
      <button onClick={onAction}>Click Me!</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <CountingParent />
  </React.StrictMode>,
  document.getElementById('root')
);
