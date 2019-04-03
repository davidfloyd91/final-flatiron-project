import React, { Component } from 'react';
import './App.css';

export default class Nav extends Component {
  render() {
    return (
      <div className='container'>
        {
          this.props.new
            ?
          <button onClick={this.props.toggleNew}>Go to dashboard</button>
            :
          <button onClick={this.props.toggleNew}>Go to sandbox</button>
        }
      </div>
    );
  };
};
