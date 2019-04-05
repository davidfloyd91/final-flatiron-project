import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sandbox from './Sandbox';
import Dashboard from './Dashboard';
import Nav from './Nav';
import './App.css';

class App extends Component {
  toggleNew = () => {
    this.props.dispatch({
      type: 'TOGGLE_NEW'
    });
 };

  render() {
    return (
      <div className='container'>
        <Nav new={this.props.new} toggleNew={this.toggleNew} />
        {this.props.new ? <Sandbox /> : <Dashboard />}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    new: state.new
  };
};

export default connect(mapStateToProps)(App);
