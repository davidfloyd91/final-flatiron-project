import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';

class Nav extends Component {
  toggleNew = () => {
    this.props.dispatch({ type: 'TOGGLE_NEW' });
    this.props.dispatch({ type: 'SET_LONG', payload: false });
  };

  clearChart = () => {
    this.props.dispatch({ type: 'SET_CHART', payload: null });
  };

  setEditToFalse = () => {
    this.props.dispatch({ type: 'SET_DEFAULT' });
  };

  logout = () => {
		localStorage.removeItem('jwt');
    // this.props.history.push('/login');
    this.props.dispatch({ type: 'SET_CHARTS', payload: [] });
		this.props.dispatch({ type: 'SET_USER_ID', payload: 0 });
	};

  render() {
    return (
      <div className='nav'>
        {
          this.props.new
            ?
          <Link to='/charts' className='navButton left' onClick={() => {this.clearChart(); this.toggleNew();}}>SAVED CHARTS</Link>
            :
          this.props.edit
            ?
          <Link to='/charts' className='navButton left' onClick={() => {this.clearChart(); this.setEditToFalse();}}>SAVED CHARTS</Link>
            :
          <Link to='/new' className='navButton left' onClick={() => {this.clearChart(); this.toggleNew()}}>NEW CHART</Link>
        }
        <Link onClick={this.logout} to='/login' className='navButtonRight right'>
          LOG OUT
        </Link>
        <Link to='/charts' className='navButtonDead'>
          SALP
        </Link>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    edit: state.edit,
    new: state.new,
    userId: state.userId
  };
};

export default connect(mapStateToProps)(Nav);
