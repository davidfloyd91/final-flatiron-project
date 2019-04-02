// thanks and praise to this guy https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a

import React, { Component } from 'react';
import Chart from 'chart.js';
let newChart;

export default class BarChart extends Component {
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
      return parseInt(a[1]);
    });

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

    newChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
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
              min: parseInt(min),
              max: parseInt(max),
              stepSize: parseInt(ticks)
            }
          }]
        }
      }
    });
  };

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  };
};
