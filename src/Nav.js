import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';
import { setLong } from './helpers';

const Nav = props => {
  const toggleNew = () => {
    props.dispatch({ type: 'TOGGLE_NEW' });
    setLong(false, props);
  };

  const clearChart = () => {
    props.dispatch({ type: 'SET_CHART', payload: null });
  };

  const setDefault = () => {
    props.dispatch({ type: 'SET_DEFAULT' });
  };

  const logout = () => {
		localStorage.removeItem('jwt');
    // props.history.push('/login');
    clearChart();
    setDefault();
    props.dispatch({ type: 'SET_CHART_TYPE', payload: '' });
    props.dispatch({ type: 'SET_CHARTS', payload: [] });
		props.dispatch({ type: 'SET_USER_ID', payload: 0 });
	};

  return (
    <div className='nav'>
      {
        props.userId > 0
          ?
        <Fragment>
          {
            props.new
              ?
            <div className='navButton left'>
              <Link to='/charts' className='white middleSmall' onClick={() => {clearChart(); toggleNew();}}>SAVED CHARTS</Link>
            </div>
              :
            props.edit
              ?
            <div className='navButton left'>
              <Link to='/charts' className='white middleSmall' onClick={() => {clearChart(); setDefault();}}>SAVED CHARTS</Link>
            </div>
              :
            <div className='navButton left'>
              <Link to='/new' className='white middleSmall' onClick={() => {clearChart(); toggleNew()}}>NEW CHART</Link>
            </div>
          }
        </Fragment>
          :
        <div className='navButton left'>
        </div>
      } {
        props.userId > 0
          ?
        <div className='navButtonRight right'>
          <Link onClick={logout} to='/login' className='white middleSmall'>
            LOG OUT
          </Link>
        </div>
          :
        <div className='navButtonRight right'>
        </div>
      }
      <div className='navButtonDead'>
        {
          props.userId > 0
            ?
          <Link to='/charts' className='white middleLarge'>
            SALP
          </Link>
            :
          <Link to='/login' className='white middleLarge'>
            SALP
          </Link>
        }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    edit: state.edit,
    new: state.new,
    userId: state.userId
  };
};

export default connect(mapStateToProps)(Nav);
