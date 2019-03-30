import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import LineChart from './LineChart';

export default class Sandbox extends Component {
  state = {
    chartType: '',
  };

  chartType = chartType => {
    this.setState({
      chartType
    });
  };

  render() {
    return (
      <Fragment>
        <h1>New {this.state.chartType} chart</h1>
        <UserInput chartType={this.chartType} />
        {
          this.state.chartType === 'line'
          ? <LineChart />
          : null
        }
      </Fragment>
    );
  };
};
