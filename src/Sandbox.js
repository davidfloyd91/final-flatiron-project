import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

export default class Sandbox extends Component {
  state = {
    chartType: '',
    grid: [],
    title: '',
    label: '',
  };

  chartType = chartType => {
    this.setState({
      chartType,
    });
  };

  setGrid = grid => {
    this.setState({ grid });
  };

  customize = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>New {this.state.chartType} chart</h1>
        <UserInput
          changeChartType={this.chartType}
          chartType={this.state.chartType}
          setGrid={this.setGrid}
          customize={this.customize}
        />
        {
          this.state.chartType === 'line'
            ?
          <LineChart
            data={this.state.grid}
            label={this.state.label}
          />
            :
          this.state.chartType === 'bar'
            ?
          <BarChart
            data={this.state.grid}
            label={this.state.label}
          />
            :
          this.state.chartType === 'pie'
            ?
          <PieChart
            data={this.state.grid}
          />
            :
          null
        }
      </Fragment>
    );
  };
};
