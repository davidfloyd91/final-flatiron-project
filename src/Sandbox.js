import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import LineChart from './LineChart';

export default class Sandbox extends Component {
  state = {
    chartType: '',
    grid: {},
  };

  chartType = chartType => {
    this.setState({
      chartType,
    });
  };

  setGrid = grid => {
    this.setState({ grid });
  };

  render() {
    console.log(this.state.grid)
    return (
      <Fragment>
        <h1>New {this.state.chartType} chart</h1>
        <UserInput
          chartType={this.chartType}
          setGrid={this.setGrid}
        />
        {
          this.state.chartType === 'line'
          ? <LineChart data={this.state.grid} />
          : null
        }
      </Fragment>
    );
  };
};
