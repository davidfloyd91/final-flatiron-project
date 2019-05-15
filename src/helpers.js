export const url = 'https://salp-api.herokuapp.com';
// export const url = 'http://localhost:3000';

export const store = require('store');
export const http = require('http');

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
      };
    });
  } else {
    props.history.push('/login');
  };
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

// https://stackoverflow.com/a/17357553
export function startKeepAlive() {
  const http = require('http');

  setInterval(function() {
    var options = {
      host: 'https://salp-client.herokuapp.com',
      port: 80,
      path: '/login'
    };

    http.get(options, function(res) {
      res.on('data', function(chunk) {
          try {
            console.log("HEROKU RESPONSE: " + chunk);
          } catch (err) {
            console.log(err.message);
          }
      });
    }).on('error', function(err) {
      console.log("Error: " + err.message);
    });
  }, 10 * 1000);
}
