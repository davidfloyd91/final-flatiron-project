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
    min: -10,
    max: 10,
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
    if ((name === 'min' || name === 'max') &&
    isNaN(value)) {
      // maybe not the best way to handle this
      this.setState({
        min: -10,
        max: 10,
      });
    } else {
      this.setState({
        [name]: value,
      });
    };
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
            title={this.state.title}
            min={this.state.min}
            max={this.state.max}
            ticks={this.state.ticks}
          />
            :
          this.state.chartType === 'bar'
            ?
          <BarChart
            data={this.state.grid}
            label={this.state.label}
            title={this.state.title}
            min={this.state.min}
            max={this.state.max}
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
