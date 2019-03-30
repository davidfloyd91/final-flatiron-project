import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';


export default class Sandbox extends Component {
  state = {
    chartType: '',
  };

  render() {
    return (
      <Fragment>
        <h1>New {this.state.chartType} chart</h1>
        <UserInput />
      </Fragment>
    );
  };
};
