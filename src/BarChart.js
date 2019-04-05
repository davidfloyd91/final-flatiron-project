// thanks and praise to this guy https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a

import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
let newChart, saveData;

class BarChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  };

  componentDidUpdate() {
    this.buildChart();
  };

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof newChart !== "undefined") {
      newChart.destroy();
    };

    const labels = this.props.data.map(a => {
      return a[0];
    });

    const chartData = this.props.data.map(a => {
      return parseFloat(a[1]);
    });

    // setting min and max values, ticks doesn't appear to work with horizontal bars
    let type;
    if (this.props.horizontal) {
      type = 'horizontalBar';
    } else {
      type = 'bar';
    };

    const label = this.props.label;
    const title = this.props.title;
    const min = this.props.min;
    const max = this.props.max;
    const ticks = this.props.ticks;

    let colors = this.props.colors;
    if (colors[0]) {
      let divisor = Math.floor(chartData.length / colors.length) + 1;
      if (divisor > 0) {
        for (let i = 0; i < divisor - 1; i++) {
          colors = [...colors, ...this.props.colors]
        };
      };
    };

    saveData = {
      type: type,
      data: {
        labels: labels,
        _datasets: [
          {
            label: label,
            fill: false,
            data: chartData,
            backgroundColor: colors
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: title
        },
        scales: {
          yAxes: [{
            ticks: {
              min: parseFloat(min),
              max: parseFloat(max),
              stepSize: parseFloat(ticks)
            }
          }]
        }
      }
    };

    let fullData = {...saveData};
    delete fullData.data;

    fullData.data = {
      labels: labels,
      datasets: [
        {
          label: label,
          fill: false,
          data: chartData,
          backgroundColor: colors
        }
      ]
    };

    newChart = new Chart(myChartRef, fullData);
  };

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
        <button onClick={() => this.props.saveChart(saveData)}>Save chart</button>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    data: state.grid,
    label: state.label,
    title: state.title,
    min: state.min,
    max: state.max,
    ticks: state.ticks,
    colors: state.colors,
    horizontal: state.horizontal,
    // saveChart: saveChart
    // couldn't tell you ^^^
  };
};

export default connect(mapStateToProps)(BarChart);
