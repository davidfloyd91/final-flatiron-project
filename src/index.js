import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// there's probably a more efficient way to accomplish things than SET_CHART_ID

const defaultState = {
  cellListening: true,
  chartType: '',
  color: '#0080FF',
  colors: ['#FF0000', '#FF8000', '#FFFF00', '#00FF00', '#0080FF', '#8000FF'],
  columns: 2,
  grid: [],
  horizontal: false,
  input: '',
  label: '',
  max: 10,
  min: -10,
  new: false,
  rows: 10,
  showSetup: true,
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
  chartId: 0,
  charts: [],
  chartType: '',
  userId: 1,
  ...defaultState
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DEFAULT':
      return {...state, ...defaultState}
    case 'SET_NAME_TO_VALUE':
      return { ...state, [action.payload.key]: action.payload.value }

    case 'SET_CELL_LISTENING':
      return {...state, cellListening: action.payload}
    case 'SET_CHART':
      return {...state, chart: action.payload}
    case 'SET_CHART_ID':
      return {...state, chartId: action.payload }
    case 'SET_CHARTS':
      return {...state, charts: action.payload }
    case 'SET_CHART_TYPE':
      return { ...state, chartType: action.payload }
    case 'SET_COLOR':
      return { ...state, color: action.payload }
    case 'SET_COLORS':
      return { ...state, colors: action.payload }
    case 'SET_COLUMNS':
      return {...state, columns: action.payload }
    case 'SET_GRID':
      return {...state, grid: action.payload }
    case 'TOGGLE_HORIZONTAL':
      return { ...state, horizontal: !state.horizontal }
    case 'SET_INPUT':
      return { ...state, input: action.payload }
    case 'SET_MAX':
      return { ...state, max: action.payload }
    case 'SET_MIN':
      return { ...state, min: action.payload }
    case 'TOGGLE_NEW':
      return { ...state, new: !state.new }
    case 'SET_ROWS':
      return {...state, rows: action.payload }
    case 'SET_SHOW_SETUP':
      return {...state, showSetup: action.payload }
    case 'SET_SHOW_TABLE':
      return {...state, showTable: action.payload }
    case 'SET_TENSION':
      return { ...state, tension: action.payload }
    case 'SET_TICKS':
      return { ...state, ticks: action.payload }
    case 'WARN':
      return { ...state, warn: action.payload }

    default:
      return state;
  };
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
