import React, { Component } from 'react';
import './App.css';

export default class Nav extends Component {
  render() {
    return (

      <div className='nav'>
        {
          this.props.new
            ?
          <button className='navButton left' onClick={this.props.toggleNew}>SAVED CHARTS</button>
            :
          <button className='navButton left' onClick={this.props.toggleNew}>NEW CHART</button>
        }
        <button className='navButton right'>
        </button>
        <button className='deadNavButton'>
          SALP
        </button>
      </div>
    );
  };
};
