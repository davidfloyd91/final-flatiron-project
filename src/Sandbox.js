import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
let colors;

export default class Sandbox extends Component {
  state = {
    chartType: '',
    grid: [],
    title: '',
    label: '',
    min: -10,
    max: 10,
    ticks: null,
    color: '#0080FF',
    colors: '',
  };

  chartType = chartType => {
    this.setState({
      chartType,
    });
  };

  setGrid = grid => {
    this.setState({ grid });
  };

  customize = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if ((name === 'min') &&
    (isNaN(value) || value === '')) {
      this.setState({ min: -10 });
    } else if ((name === 'max') &&
    (isNaN(value) || value === '')) {
      this.setState({ max: -10 });
    } else if ((name === 'ticks') &&
    (isNaN(value) || value === '')) {
      this.setState({ ticks: null });
    } else if (name === 'colors') {
      if (e.target.checked) {
        colors = [...new Set([...this.state.colors, value])];
      } else {
        let i = this.state.colors.indexOf(value);
        colors = [...this.state.colors.slice(0, i), ...this.state.colors.slice(i + 1)];
      };
      // behavior here isn't ideal: deciding which item is which color requires clicking the checkboxes in the right order
      this.setState({ colors });
    } else {
      this.setState({ [name]: value });
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
            color={this.state.color}
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
            ticks={this.state.ticks}
            color={this.state.color}
          />
            :
          this.state.chartType === 'pie'
            ?
          <PieChart
            data={this.state.grid}
            title={this.state.title}
            colors={this.state.colors}
          />
            :
          null
        }
      </Fragment>
    );
  };
};
