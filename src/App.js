import React, { Component } from 'react';
import Sandbox from './Sandbox';
import Dashboard from './Dashboard';
import Nav from './Nav';
import './App.css';

export default class App extends Component {
  state = {
    new: false,
    userId: 1,
  };

  toggleNew = () => {
   this.setState({
     new: !this.state.new,
   });
 };

  render() {
    return (
      <div className='container'>
        <Nav new={this.state.new} toggleNew={this.toggleNew} />
        {this.state.new ? <Sandbox /> : <Dashboard userId={this.state.userId} />}
      </div>
    );
  };
};
