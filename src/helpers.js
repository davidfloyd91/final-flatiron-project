export function autoLogin(jwt, props) {
  if (jwt) {
    fetch('http://localhost:3000/auto_login', {
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
