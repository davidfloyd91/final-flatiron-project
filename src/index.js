import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const defaultState = {
  chartType: '',
  color: '#3c40c6',
  colors: ['#ff3f34', '#ffa801', '#ffd32a', '#05c46b', '#0fbcf9', '#575fcf'],
  columns: 2,
  edit: false,
  grid: [],
  horizontal: false,
  input: '',
  label: '',
  max: 10,
  min: -10,
  new: false,
  radius: 3,
  rows: 10,
  showTable: false,
  tension: 0.4,
  ticks: 0,
  title: '',
  warn: '',
  xLabel: '',
  yLabel: ''
};

const initialState = {
  chart: null,
  charts: [],
  chartType: '',
  userId: 0,
  long: false,
  ...defaultState
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DEFAULT':
      return { ...state, ...defaultState }
    case 'SET_NAME_TO_VALUE':
      return { ...state, [action.payload.key]: action.payload.value }

    case 'SET_CHART':
      return { ...state, chart: action.payload }
    case 'SET_CHARTS':
      return { ...state, charts: action.payload }
    case 'SET_CHART_TYPE':
      return { ...state, chartType: action.payload }
    case 'SET_COLOR':
      return { ...state, color: action.payload }
    case 'SET_COLORS':
      return { ...state, colors: action.payload }
    case 'SET_COLUMNS':
      return { ...state, columns: action.payload }
    case 'SET_EDIT':
      return { ...state, edit: action.payload }
    case 'SET_GRID':
      return { ...state, grid: action.payload }
    case 'SET_HORIZONTAL':
      return { ...state, horizontal: action.payload }
    case 'SET_INPUT':
      return { ...state, input: action.payload }
    case 'SET_LABEL':
      return { ...state, label: action.payload }
    case 'SET_LONG':
      return {...state, long: action.payload}
    case 'SET_MAX':
      return { ...state, max: action.payload }
    case 'SET_MIN':
      return { ...state, min: action.payload }
    case 'SET_RADIUS':
      return { ...state, radius: action.payload }
    case 'TOGGLE_NEW':
      return { ...state, new: !state.new }
    case 'SET_ROWS':
      return { ...state, rows: action.payload }
    case 'SET_SHOW_TABLE':
      return { ...state, showTable: action.payload }
    case 'SET_TENSION':
      return { ...state, tension: action.payload }
    case 'SET_TICKS':
      return { ...state, ticks: action.payload }
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_USER_ID':
      return { ...state, userId: action.payload }
    case 'WARN':
      return { ...state, warn: action.payload }
    case 'SET_X_LABEL':
      return { ...state, xLabel: action.payload }
    case 'SET_Y_LABEL':
      return { ...state, yLabel: action.payload }

    default:
      return state;
  };
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
