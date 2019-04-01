import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

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
          : this.state.chartType === 'bar'
          ? <BarChart data={this.state.grid} />
          : this.state.chartType === 'pie'
          ? <PieChart data={this.state.grid} />
          : null
        }
      </Fragment>
    );
  };
};
