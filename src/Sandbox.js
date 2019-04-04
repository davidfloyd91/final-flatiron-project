import React, { Component, Fragment } from 'react';
import UserInput from './UserInput';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Flatted, {parse, stringify} from 'flatted/esm';
let colors;

export default class Sandbox extends Component {
  state = {
    chartType: '',
    grid: [],
    title: '',
    label: '',
    min: -10,
    max: 10,
    ticks: 0,
    color: '#0080FF',
    colors: '',
    horizontal: false,
    warn: '',
  };

  saveChart = data => {
    fetch('http://localhost:3000/charts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        data: data
      })
    })
    .then(r => r.json())
  };

  chartType = chartType => {
    this.setState({
      chartType,
    });
  };

  setGrid = firstGrid => {
    let grid = [];
    let i = 0;

    this.setState({
      warn: ''
    }, () => {
      firstGrid.forEach(row => {
        if (row[1] && isNaN(parseFloat(row[1]))) {
          grid.push([row[0], "0"]);
          i++;
        } else if (!row[1]) {
          return;
        } else {
          grid.push([...row]);
        };
      });

      this.setState({
        grid,
        warn: `Warning: ${i} y-value(s) not recognized and set to 0. Consider editing your CSV.`,
      });
    });
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
      this.setState({ ticks: 0});
    } else if (name === 'colors') {
      if (e.target.checked) {
        colors = [...new Set([...this.state.colors, value])];
      } else {
        let i = this.state.colors.indexOf(value);
        colors = [...this.state.colors.slice(0, i), ...this.state.colors.slice(i + 1)];
      };
      // behavior here isn't ideal: deciding which item is which color requires clicking the checkboxes in the right order
      this.setState({ colors });
    } else if (name === 'horizontal') {
      this.setState({ horizontal: !this.state.horizontal })
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
          horizontal={this.state.horizontal}
        />
        {
          this.state.warn[0]
            ?
          <h5>{this.state.warn}</h5>
            :
          null
        } {
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
            saveChart={this.saveChart}
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
            colors={this.state.colors}
            horizontal={this.state.horizontal}
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
