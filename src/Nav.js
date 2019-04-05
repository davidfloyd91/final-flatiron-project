import React, { Component } from 'react';
import './App.css';

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        {
          this.props.new
            ?
          <button className='navButton' onClick={this.props.toggleNew}>GO TO YOUR DASHBOARD</button>
            :
          <button className='navButton' onClick={this.props.toggleNew}>MAKE A NEW CHART</button>
        }
      </div>
    );
  };
};
