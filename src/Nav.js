import React, { Component, Fragment } from 'react';
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

  setDefault = () => {
    this.props.dispatch({ type: 'SET_DEFAULT' });
  };

  logout = () => {
		localStorage.removeItem('jwt');
    // this.props.history.push('/login');
    this.clearChart();
    this.setDefault();
    this.props.dispatch({ type: 'SET_CHART_TYPE', payload: '' });
    this.props.dispatch({ type: 'SET_CHARTS', payload: [] });
		this.props.dispatch({ type: 'SET_USER_ID', payload: 0 });
	};

  render() {
    return (
      <div className='nav'>
        {
          this.props.userId > 0
            ?
          <Fragment>
            {
              this.props.new
                ?
              <div className='navButton left'>
                <Link to='/charts' className='white middleSmall' onClick={() => {this.clearChart(); this.toggleNew();}}>SAVED CHARTS</Link>
              </div>
                :
              this.props.edit
                ?
              <div className='navButton left'>
                <Link to='/charts' className='white middleSmall' onClick={() => {this.clearChart(); this.setDefault();}}>SAVED CHARTS</Link>
              </div>
                :
              <div className='navButton left'>
                <Link to='/new' className='white middleSmall' onClick={() => {this.clearChart(); this.toggleNew()}}>NEW CHART</Link>
              </div>
            }
          </Fragment>
            :
          <div className='navButton left'>
          </div>
        } {
          this.props.userId > 0
            ?
          <div className='navButtonRight right'>
            <Link onClick={this.logout} to='/login' className='white middleSmall'>
              LOG OUT
            </Link>
          </div>
            :
          <div className='navButtonRight right'>
          </div>
        }
        <div className='navButtonDead'>
          <Link to='/charts' className='white middleLarge'>
            SALP
          </Link>
        </div>
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
