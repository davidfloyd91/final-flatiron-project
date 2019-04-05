import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserInput from './UserInput';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
let colors;

class Sandbox extends Component {
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
    this.props.dispatch({
      type: 'SET_CHART_TYPE', payload: chartType
    })
    // this.setState({
    //   chartType,
    // });
  };

  setGrid = firstGrid => {
    let grid = [];
    let i = 0;

    this.props.dispatch({
      type: 'WARN', payload: ''

    // this.setState({
    //   warn: ''
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

      if (i > 0) {
        this.props.dispatch({
          type: 'SET_GRID'
        });

        this.props.dispatch({
          type: 'WARN', payload: `Warning: ${i} y-value(s) not recognized and set to 0. Consider editing your CSV.`

        // this.setState({
        //   grid,
        //   warn: `Warning: ${i} y-value(s) not recognized and set to 0. Consider editing your CSV.`,
        });
      };
    });
  };

  // THIS IS WHERE YOU STOPPED

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
        colors = [...new Set([...this.props.colors, value])];
      } else {
        let i = this.props.colors.indexOf(value);
        colors = [...this.props.colors.slice(0, i), ...this.props.colors.slice(i + 1)];
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
        <h1>New {this.props.chartType} chart</h1>
        <UserInput
          changeChartType={this.chartType}
          chartType={this.state.chartType}
          setGrid={this.setGrid}
          customize={this.customize}
          horizontal={this.state.horizontal}
        />
        {
          this.props.warn[0]
            ?
          <h5>{this.props.warn}</h5>
            :
          null
        } {
          this.props.chartType === 'line'
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
          this.props.chartType === 'bar'
            ?
          <BarChart />
            :
          this.props.chartType === 'pie'
            ?
          <PieChart
            data={this.state.grid}
            title={this.state.title}
            colors={this.state.colors}
            saveChart={this.saveChart}
          />
            :
          null
        }
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    chartType: state.chartType,
    colors: state.colors,
    warn: state.warn
  };
};

export default connect(mapStateToProps)(Sandbox);
