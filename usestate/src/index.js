import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class OneTimeButton extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.props.onClick();
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        You can only click me once
      </button>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <OneTimeButton onClick={() => alert('hi')} />
  </React.StrictMode>,
  document.getElementById('root')
);
