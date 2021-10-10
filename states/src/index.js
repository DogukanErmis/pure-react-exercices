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
        <Child onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

function Child({ onAction }) {
  return <button onClick={onAction}>Click Me!</button>;
}

ReactDOM.render(
  <React.StrictMode>
    <CountingParent />
  </React.StrictMode>,
  document.getElementById('root')
);
