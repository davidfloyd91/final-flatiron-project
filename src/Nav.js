import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Nav extends Component {
  toggleNew = () => {
    this.props.dispatch({ type: 'TOGGLE_NEW' });
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
          <button className='navButton left' onClick={this.toggleNew}>NEW CHART</button>
        }
        <button className='navButton right'>
          USERSTUFFIGUESS
        </button>
        <button className='deadNavButton'>
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
