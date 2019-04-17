import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';
import { setChart, setCharts, setChartType, setDefault, setLong, setUserId, toggleNew } from './helpers';

const Nav = props => {
  const logout = () => {
		localStorage.removeItem('jwt');
    setChart(null, props);
    setDefault(props);
    setChartType('', props);
    setCharts([], props);
    setUserId(0, props);
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
              <Link to='/charts' className='white middleSmall' onClick={() => {setChart(null, props); /*toggleNewSetShort();*/ setDefault();}}>SAVED CHARTS</Link>
            </div>
              :
            props.edit
              ?
            <div className='navButton left'>
              <Link to='/charts' className='white middleSmall' onClick={() => {setChart(null, props); setDefault();}}>SAVED CHARTS</Link>
            </div>
              :
            <div className='navButton left'>
              <Link to='/new' className='white middleSmall' onClick={() => {setChart(null, props); toggleNew(props); setLong(false, props);}}>NEW CHART</Link>
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
