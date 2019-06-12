export const url = 'https://salp-api.herokuapp.com';
// export const url = 'http://localhost:3000';

export const store = require('store');
export const http = require('http');
export const _ = require('lodash');

export function convertToFullData(saveData) {
  let fullData = _.cloneDeep({...saveData});
  fullData.options.animation = false;
  const datasets = fullData.data._datasets;
  delete fullData.data._datasets;
  fullData.data.datasets = datasets;

  return fullData;
};

export function setChart(data, props) {
  props.dispatch({ type: 'SET_CHART', payload: data });
};

export function setCharts(charts, props) {
  props.dispatch({ type: 'SET_CHARTS', payload: charts });
};

export function setChartType(type, props) {
  props.dispatch({ type: 'SET_CHART_TYPE', payload: type });
};

export function setDefault(props) {
  props.dispatch({ type: 'SET_DEFAULT' });
};

export function setLong(bool, props) {
  props.dispatch({ type: 'SET_LONG', payload: bool });
};

export function setUserId(id, props) {
  props.dispatch({ type: 'SET_USER_ID', payload: id });
};

export function toggleNew(props) {
  props.dispatch({ type: 'TOGGLE_NEW' });
};

export function autoLogin(props) {
  const jwt = store.get('jwt');

  if (jwt) {
    fetch(`${url}/auto_login`, {
      headers: {
        'Authorization': jwt
      }
    })
    .then(r => r.json())
    .then(r => {
      if (r.errors) {
        alert(r.errors);
      } else {
        setUserId(r.id, props);
        if (props.history.location.pathname === '/login' || props.history.location.pathname === '/signup') {
          props.history.push('/charts');
        };
      };
    });
  } else {
    // line 67 is new
    setUserId(0, props);
    if (props.history.location.pathname !== '/signup') {
      props.history.push('/login');
    };
  };
};
