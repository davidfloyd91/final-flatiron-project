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
    if ((e.target.name === 'min') &&
    (isNaN(e.target.value) || e.target.value === '')) {
      this.setState({ min: -10 });
    } else if ((e.target.name === 'max') &&
    (isNaN(e.target.value) || e.target.value === '')) {
      this.setState({ max: -10 });
    } else if ((e.target.name === 'ticks') &&
    (isNaN(e.target.value) || e.target.value === '')) {
      this.setState({ ticks: null });
    } else if (e.target.name === 'colors') {
      if (e.target.checked) {
        colors = [...new Set([...this.state.colors, e.target.value])];
      } else {
        let i = this.state.colors.indexOf(e.target.value);
        colors = this.state.colors.splice(i, 1);
      };
      // there is a strange bug when you uncheck
      this.setState({ colors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    };
  };

  render() {
    console.log(this.state.colors)
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
