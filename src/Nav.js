import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Nav extends Component {
  toggleNew = () => {
    this.props.dispatch({ type: 'TOGGLE_NEW' });
 };

 clearChart = () => {
   this.props.dispatch({ type: 'SET_CHART', payload: null });
 };

 setEditToFalse = () => {
   this.props.dispatch({ type: 'SET_DEFAULT' });
 };

  render() {
    return (
      <div className='nav'>
        {
          this.props.new
            ?
          <button className='navButton left' onClick={this.toggleNew}>SAVED CHARTS</button>
            :
          this.props.edit
            ?
          <button className='navButton left' onClick={this.setEditToFalse}>SAVED CHARTS</button>
            :
          <button className='navButton left' onClick={() => {this.toggleNew(); this.clearChart();}}>NEW CHART</button>
        }
        <button className='navButtonRight right'>
          USERSTUFFIGUESS
        </button>
        <button className='navButtonDead'>
          SALP
        </button>
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

export default connect(mapStateToProps)(Nav);
