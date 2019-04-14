import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sandbox from './Sandbox';
import Dashboard from './Dashboard';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav />
        {
          (this.props.new || this.props.edit)
          ? <Sandbox />
          : <Dashboard />
        }
        <Footer />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    edit: state.edit,
    new: state.new
  };
};

export default connect(mapStateToProps)(App);
