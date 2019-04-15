import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';

class Nav extends Component {
  // get rid of this
  toggleNew = () => {
    this.props.dispatch({ type: 'TOGGLE_NEW' });
 };

 clearChart = () => {
   this.props.dispatch({ type: 'SET_CHART_ID', payload: 0 });
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
          <Link to='/dashboard' className='navButton left' onClick={() => {this.clearChart();}}>SAVED CHARTS</Link>
            :
          this.props.edit
            ?
          <Link to='/dashboard' className='navButton left' onClick={() => {this.clearChart(); this.setEditToFalse();}}>SAVED CHARTS</Link>
            :
          <Link to='/sandbox' className='navButton left' onClick={() => {this.clearChart();}}>NEW CHART</Link>
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
