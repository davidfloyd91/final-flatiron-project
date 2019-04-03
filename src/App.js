import React, { Component } from 'react';
import Sandbox from './Sandbox';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  state = {
    new: false,
  };

  render() {
    return (
      <div className='container'>
        {this.state.new ? <Sandbox /> : <Dashboard />}
      </div>
    );
  };
};

export default App;
