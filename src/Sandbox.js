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
  };

  chartType = chartType => {
    this.setState({
      chartType,
    });
  };

  setGrid = grid => {
    this.setState({ grid });
  };

  setTitle = title => {
    this.setState({ title });
  };

  render() {
    return (
      <Fragment>
        <h1>New {this.state.chartType} chart</h1>
        <UserInput
          changeChartType={this.chartType}
          chartType={this.state.chartType}
          setGrid={this.setGrid}
          setTitle={this.setTitle}
        />
        {
          this.state.chartType === 'line'
            ?
          <LineChart
            data={this.state.grid}
            title={this.state.title}
          />
            :
          this.state.chartType === 'bar'
            ?
          <BarChart
            data={this.state.grid}
            title={this.state.title}
          />
            :
          this.state.chartType === 'pie'
            ?
          <PieChart
            data={this.state.grid}
            title={this.state.title}
          />
            :
          null
        }
      </Fragment>
    );
  };
};
