import React, { Component } from 'react';
import UserChart from './UserChart';
import './App.css';

// hi you hard-coded the chart id in here don't forget

class App extends Component {
  render() {
    return (
      <div className='container'>
        <UserChart chartId='1' />
      </div>
    );
  };
};

export default App;
