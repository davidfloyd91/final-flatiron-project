import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    chartType: '',
    color: '#0080FF',
    colors: '',
    horizontal: false,
    grid: [],
    label: '',
    max: 10,
    min: -10,
    new: false,
    ticks: 0,
    title: '',
    userId: 1,
    warn: '',
  };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHART_TYPE':
      return { ...state, chartType: action.payload }
    case 'TOGGLE_NEW':
      return { ...state, new: !state.new }
    case 'WARN':
      return { ...state, warn: action.payload }
    // case "LOLOLOL:"
    //   return { ...state, lol: state.lol + 1 }
    // case "LOLOLOL:"
    //   return { ...state, lol: state.lol + 1 }
    // case "LOLOLOL:"
    //   return { ...state, lol: state.lol + 1 }
    // case "LOLOLOL:"
    //   return { ...state, lol: state.lol + 1 }
    // case "LOLOLOL:"
    //   return { ...state, lol: state.lol + 1 } action.payload] }
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
